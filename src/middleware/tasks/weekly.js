import { getISODay, startOfWeek, addDays } from 'date-fns'

const newWeeklyInfo = date => {
  const monday = startOfWeek(date, { weekStartsOn: 1 })
  return [
    { id: 0, approved: 0, unApproved: 0, date: monday },
    { id: 1, approved: 0, unApproved: 0, date: addDays(monday, 1) },
    { id: 2, approved: 0, unApproved: 0, date: addDays(monday, 2) },
    { id: 3, approved: 0, unApproved: 0, date: addDays(monday, 3) },
    { id: 4, approved: 0, unApproved: 0, date: addDays(monday, 4) },
    { id: 5, approved: 0, unApproved: 0, date: addDays(monday, 5) },
    { id: 6, approved: 0, unApproved: 0, date: addDays(monday, 6) }
  ]
}

const formatWeeklyTasks = tasks => {
  const weekInfo = newWeeklyInfo(tasks[0].startAt.toDate())
  return tasks.reduce((weekInfo, task) => {
    const weekDay = getISODay(task.startAt.toDate()) - 1
    weekInfo[weekDay] = addToWeekDay(weekInfo[weekDay], task)
    return weekInfo
  }, weekInfo)
}

const addToWeekDay = (weekDay, task) => {
  if (task.isApproved) {
    weekDay.approved += task.totalMinutes || 0
  } else {
    weekDay.unApproved += task.totalMinutes || 0
  }

  return weekDay
}

export { formatWeeklyTasks }
