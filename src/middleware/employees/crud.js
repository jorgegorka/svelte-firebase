import { notificationMessage } from '../../stores/notification_message.js'

const addEmployee = employeeInfo => {
  Employees.add(employeeInfo).then(
    notificationMessage.set({
      message: 'Employee created successfully.',
      type: 'success-toast'
    })
  )
}

const editEmployee = (employeeId, employeeInfo) => {
  Employees.update(employeeId, employeeInfo).then(
    notificationMessage.set({
      message: 'Employee updated successfully.',
      type: 'success-toast'
    })
  )
}

export { addEmployee, editEmployee }
