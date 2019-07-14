import { FirebaseEmployees } from './index'

const employeesDb = () => {
  const add = _employeeInfo => {
    return false
    // return FirebaseEmployees.add(employeeInfo)
  }

  // TODO: Move to server function to check permission
  const archive = employeeId => {
    return FirebaseEmployees.doc(employeeId).set({ active: false }, { merge: true })
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

  const findAll = ({ companyId, teamId, active = true }) => {
    let query = FirebaseEmployees.where('companyId', '==', companyId).where('active', '==', active)
    if (teamId) {
      query = query.where('teamId', '==', teamId)
    }

    return query.orderBy('name')
  }

  const toggleStatus = employee => {
    if (!employee.active) {
      return unarchive(employee.id)
    } else {
      return archive(employee.id)
    }
  }

  // TODO: Move to server function to check permissions
  const unarchive = employeeId => {
    return FirebaseEmployees.doc(employeeId).set({ active: true }, { merge: true })
  }

  return Object.freeze({
    add,
    archive,
    update,
    findOne,
    findAll,
    findByUserId,
    toggleStatus,
    unarchive
  })
}

const Employees = employeesDb()

export { Employees }
