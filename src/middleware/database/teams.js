import { FirebaseTeams } from '@/middleware/database'

const teamsDb = () => {
  const add = teamInfo => {
    return FirebaseTeams.add({
      name: teamInfo.name,
      employeesCount: 0,
      createdBy: teamInfo.createdBy
    })
  }

  const update = (teamId, teamInfo) => {
    return FirebaseTeams.doc(teamId).update(teamItem(teamInfo))
  }

  const findOne = teamId => {
    return FirebaseTeams.doc(teamId).get()
  }

  const findAll = companyId => {
    return FirebaseTeams.where('companyId', '==', companyId).orderBy('name')
  }

  const teamItem = teamInfo => {
    return {
      name: teamInfo.name
    }
  }

  return Object.freeze({
    add,
    update,
    findOne,
    findAll
  })
}

const Teams = teamsDb()

export { Teams }
