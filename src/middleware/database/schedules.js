import { FirebaseSchedules } from '@/middleware/database'

const schedulesDb = () => {
  const add = scheduleInfo => {
    scheduleInfo.endAt = validEndDate(scheduleInfo.endAt)
    return FirebaseSchedules.add({
      name: scheduleInfo.name,
      startAt: scheduleInfo.startAt,
      endAt: scheduleInfo.endAt,
      createdBy: scheduleInfo.createdBy
    })
  }

  const update = (scheduleId, scheduleInfo) => {
    scheduleInfo.endAt = validEndDate(scheduleInfo.endAt)
    return FirebaseSchedules.doc(scheduleId).update({
      name: scheduleInfo.name,
      startAt: scheduleInfo.startAt,
      endAt: scheduleInfo.endAt
    })
  }

  const remove = scheduleId => {
    return FirebaseSchedules.doc(scheduleId).delete()
  }

  const findOne = scheduleId => {
    return FirebaseSchedules.doc(scheduleId).get()
  }

  const findOneLive = scheduleId => {
    return FirebaseSchedules.doc(scheduleId)
  }

  const findAll = companyId => {
    return FirebaseSchedules.where('companyId', '==', companyId).orderBy('name')
  }

  const validEndDate = date => {
    if (!date) {
      return new Date(2089, 3, 26)
    } else {
      return date
    }
  }

  return Object.freeze({
    add,
    update,
    findOne,
    findOneLive,
    findAll,
    remove
  })
}

const Schedules = schedulesDb()

export { Schedules }
