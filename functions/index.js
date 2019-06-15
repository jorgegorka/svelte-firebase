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
  console.log(userId)

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

  const userId = context.auth.uid
  const { employeeData } = data

  if (!employeeData || !employeeData.email || !employeeData.name || !employeeData.password) {
    throw new functions.https.HttpsError('not-found')
  }

  const userInfo = await admin.auth().getUser(userId)

  if (!userInfo) {
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
    companyId: userInfo.customClaims.companyId,
    role: 'user'
  })

  const newEmployeeInfo = {
    id: newUser.uid,
    email: employeeData.email,
    name: employeeData.name,
    status: 'active',
    companyId: userInfo.customClaims.companyId,
    createdAt: new Date(),
    createdBy: userInfo.uid
  }

  return Employees.doc(newUser.uid)
    .set(newEmployeeInfo)
    .then(() => {
      return 'ok'
    })
})
