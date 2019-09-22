import { writable } from 'svelte/store'

const userInfo = writable({})

function setUser(user) {
  userInfo.set(user)
}

function removeUser() {
  userInfo.set({})
}

const currentUser = {
  subscribe: userInfo.subscribe,
  set: setUser,
  remove: removeUser
}

export { currentUser }
