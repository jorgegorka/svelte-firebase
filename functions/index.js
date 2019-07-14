const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const firestore = admin.firestore()
firestore.settings({ timestampsInSnapshots: true })

exports.createCompany = functions.region('europe-west1').https.onCall(async (data, context) => {
  const Companies = firestore.collection('companies')
  const Employees = firestore.collection('employees')

  if (!context.auth && !context.auth.uid) {
    throw new functions.https.HttpsError('unauthenticated')
  }

  const { companyName } = data
  if (!companyName) {
    throw new functions.https.HttpsError('not-found')
  }
  const userId = context.auth.uid

  await admin.auth().setCustomUserClaims(userId, { role: 'admin' })

  return Companies.add({ name: companyName.toString(), createdBy: userId, createdAt: new Date() }).then(doc => {
    Employees.doc(userId).set({
      name: companyName.toString(),
      role: 'creator',
      companyId: doc.id,
      createdAt: new Date(),
      createdBy: userId,
      active: true
    })
    admin.auth().setCustomUserClaims(userId, { companyId: doc.id, role: 'admin' })

    return 'ok'
  })
})

exports.createEmployee = functions.region('europe-west1').https.onCall(async (data, context) => {
  const Employees = firestore.collection('employees')

  if (!context.auth && !context.auth.uid && !context.auth.token.companyId && !context.auth.token.role === 'admin') {
    throw new functions.https.HttpsError('unauthenticated')
  }

  const employeeData = data

  if (!employeeData || !employeeData.email || !employeeData.name || !employeeData.password) {
    throw new functions.https.HttpsError('not-found')
  }

  const newUser = await admin.auth().createUser({
    email: employeeData.email,
    displayName: employeeData.name,
    password: employeeData.password
  })

  if (!newUser) {
    throw new functions.https.HttpsError('not-found')
  }

  admin.auth().setCustomUserClaims(newUser.uid, {
    companyId: context.auth.token.companyId,
    role: 'user'
  })

  const newEmployeeInfo = {
    id: newUser.uid,
    email: employeeData.email,
    name: employeeData.name,
    role: 'user',
    active: true,
    companyId: context.auth.token.companyId,
    createdAt: new Date(),
    createdBy: context.auth.uid
  }

  if (employeeData.teamId) {
    newEmployeeInfo.teamId = employeeData.teamId
    newEmployeeInfo.teamName = employeeData.teamName
  }

  return Employees.doc(newUser.uid)
    .set(newEmployeeInfo)
    .then(() => {
      return 'ok'
    })
})

exports.teamCreate = functions
  .region('europe-west1')
  .firestore.document('teams/{teamId}')
  .onCreate((snapshot, _context) => {
    const newTeam = snapshot.data()
    const teamRef = snapshot.ref

    if (!newTeam.createdBy) {
      return true
    }

    return admin
      .auth()
      .getUser(newTeam.createdBy)
      .then(userInfo => {
        return teamRef.update({
          createdAt: new Date(),
          employeesCount: 0,
          companyId: userInfo.customClaims.companyId
        })
      })
  })

exports.updateTeamsCount = functions
  .region('europe-west1')
  .firestore.document('employees/{employeeID}')
  .onWrite(async (change, _context) => {
    let changes = []

    // Update employee
    if (change.before.exists && change.after.exists) {
      const updatedEmployee = change.after.data()
      const oldEmployee = change.before.data()
      if (updatedEmployee !== oldEmployee) {
        if (oldEmployee.teamId) {
          changes.push({ action: admin.firestore.FieldValue.increment(-1), teamId: oldEmployee.teamId })
        }

        if (updatedEmployee.teamId) {
          changes.push({ action: admin.firestore.FieldValue.increment(1), teamId: updatedEmployee.teamId })
        }
      }
    }

    // New employee
    if (!change.before.exists) {
      const employee = change.after.data()
      changes.push({ action: admin.firestore.FieldValue.increment(1), teamId: employee.teamId })
    }

    // Removed employee
    if (!change.after.exists) {
      const employee = change.before.data()
      changes.push({ action: admin.firestore.FieldValue.increment(-1), teamId: employee.teamId })
    }

    // Updated team for employee
    if (changes.length === 0) {
      console.log('no changes')
      return 'no changes'
    }
    const Teams = firestore.collection('teams')

    changes.forEach(change => {
      Teams.doc(change.teamId).update({ employeesCount: change.action })
    })

    return 'ok'
  })
