import { FirebaseTeams } from './index'

const teamsDb = () => {
  const add = teamInfo => {
    return FirebaseTeams.add(teamInfo)
  }

  const update = (teamId, teamInfo) => {
    return FirebaseTeams.doc(teamId).update(teamInfo)
  }

  const remove = teamId => {
    return FirebaseTeams.doc(teamId).delete()
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
    findAll,
    remove
  })
}

const Teams = teamsDb()

export { Teams }
