import { FirebaseTeams } from './index'

const teamsDb = () => {
  const add = teamInfo => {
    return FirebaseTeams.add({
      name: teamInfo.name,
      createdBy: teamInfo.createdBy
    })
  }

  const update = (teamId, teamInfo) => {
    return FirebaseTeams.doc(teamId).update(teamInfo)
  }

  const findOne = teamId => {
    return FirebaseTeams.doc(teamId).get()
  }

  const findAll = companyId => {
    return FirebaseTeams.where('companyId', '==', companyId).orderBy('name')
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
