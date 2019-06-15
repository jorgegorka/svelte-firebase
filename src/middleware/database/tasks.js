import { FirebaseTasks } from '@/middleware/database'

const tasksDb = () => {
  const add = taskInfo => {
    return FirebaseTasks.add({
      startAt: taskInfo.startAt,
      endAt: taskInfo.endAt,
      employeeId: taskInfo.employeeId,
      createdBy: taskInfo.createdBy,
      isActive: taskInfo.isActive || false,
      isApproved: taskInfo.isApproved || false,
      activityId: taskInfo.activityId || 0
    })
  }

  const update = (taskId, taskInfo) => {
    return FirebaseTasks.doc(taskId).update(taskInfo)
  }

  const remove = taskId => {
    return FirebaseTasks.doc(taskId).delete()
  }

  const startActivity = (companyId, employeeId) => {
    return findActive(companyId, employeeId)
      .get()
      .then(docs => {
        if (docs.empty) {
          const taskInfo = {
            startAt: new Date(),
            employeeId: employeeId,
            createdBy: employeeId,
            isActive: true,
            isApproved: false,
            totalMinutes: 0,
            activityId: 0
          }
          return add(taskInfo)
        } else {
          throw new Error('activityExists')
        }
      })
  }

  const endActivity = (companyId, employeeId) => {
    return findActive(companyId, employeeId)
      .get()
      .then(docs => {
        if (docs.empty) {
          throw new Error('no-activity')
        } else {
          const taskInfo = {
            endAt: new Date(),
            isActive: false
          }
          docs.forEach(doc => {
            return update(doc.id, taskInfo)
          })
        }
      })
  }

  const approveTask = taskId => {
    const taskInfo = { isApproved: true }
    return update(taskId, taskInfo)
  }

  const unApproveTask = taskId => {
    const taskInfo = { isApproved: false }
    return update(taskId, taskInfo)
  }

  const findOne = taskId => {
    return FirebaseTasks.doc(taskId).get()
  }

  const findActive = (companyId, employeeId) => {
    return FirebaseTasks.where('companyId', '==', companyId)
      .where('employeeId', '==', employeeId)
      .where('isActive', '==', true)
  }

  const findAll = (companyId, employeeId) => {
    return FirebaseTasks.where('companyId', '==', companyId)
      .where('employeeId', '==', employeeId)
      .orderBy('startAt')
  }

  const findByDate = options => {
    let query = FirebaseTasks.where('companyId', '==', options.companyId)
      .where('startAt', '>=', options.startDate)
      .where('startAt', '<=', options.endDate)
      .where('isActive', '==', false)

    if (options.employeeId) {
      query = query.where('employeeId', '==', options.employeeId)
    }

    if (options.teamId) {
      query = query.where('teamId', '==', options.teamId)
    }

    return query.orderBy('startAt')
  }

  return Object.freeze({
    add,
    approveTask,
    endActivity,
    findOne,
    findActive,
    findAll,
    findByDate,
    remove,
    startActivity,
    unApproveTask,
    update
  })
}

const Tasks = tasksDb()

export { Tasks }
