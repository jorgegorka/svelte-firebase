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
      status: 'active',
      companyId: doc.id,
      createdAt: new Date(),
      createdBy: userId
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
    status: 'active',
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
