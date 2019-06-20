import { notificationMessage } from '../../stores/notification_message.js'
import { Teams } from '../database/teams'

const addTeam = teamInfo => {
  Teams.add(teamInfo).then(
    notificationMessage.set({
      message: 'Team created successfully.',
      type: 'success-toast'
    })
  )
}

const editTeam = (teamId, teamInfo) => {
  Teams.update(teamId, teamInfo).then(
    notificationMessage.set({
      message: 'Team updated successfully.',
      type: 'success-toast'
    })
  )
}

export { addTeam, editTeam }
