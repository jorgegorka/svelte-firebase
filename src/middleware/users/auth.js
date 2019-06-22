import { currentUser } from '../../stores/current_user'
import { Auth } from '../../config/firebase'
import { Employees } from '../database/employees'

Auth.onAuthStateChanged(() => {
  if (Auth.currentUser) {
    const userInfo = {
      email: Auth.currentUser.email,
      id: Auth.currentUser.uid,
      phoneNumber: Auth.currentUser.phoneNumber,
      photoUrl: Auth.currentUser.photoUrl
    }

    Employees.findOne(Auth.currentUser.uid).then(doc => {
      userInfo.employee = doc.data()
      userInfo.employee.id = doc.id
      userInfo.displayName = userInfo.employee.name

      Auth.currentUser.getIdTokenResult().then(idToken => {
        userInfo.companyId = idToken.claims.companyId
        userInfo.isAdmin = idToken.claims.role === 'admin' || idToken.claims.role === 'superAdmin'

        currentUser.set(userInfo)
      })
    })
  } else {
    currentUser.set({ id: 0 })
  }
})
