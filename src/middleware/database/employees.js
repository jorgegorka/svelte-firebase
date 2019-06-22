import { FirebaseEmployees } from './index'

const employeesDb = () => {
  const add = _employeeInfo => {
    return false
    // return FirebaseEmployees.add(employeeInfo)
  }

  const update = (employeeId, employeeInfo) => {
    delete employeeInfo.email
    delete employeeInfo.password
    return FirebaseEmployees.doc(employeeId).update(employeeInfo)
  }

  const findOne = employeeId => {
    return FirebaseEmployees.doc(employeeId).get()
  }

  const findByUserId = userId => {
    return FirebaseEmployees.where('userId', '==', userId).get()
  }

  const findAll = companyId => {
    return FirebaseEmployees.where('companyId', '==', companyId).orderBy('name')
  }

  const remove = employeeId => {
    return FirebaseEmployees.doc(employeeId).delete()
  }

  return Object.freeze({
    add,
    update,
    findOne,
    findAll,
    findByUserId,
    remove
  })
}

const Employees = employeesDb()

export { Employees }
