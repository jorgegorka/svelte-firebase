import { writable } from 'svelte/store'

const NotificationMessageStore = writable([])

function set(content) {
  NotificationMessageStore.set(content)
}

function add(newMessage) {
  NotificationMessageStore.update(function(currentStore) {
    currentStore.push(newMessage)

    return currentStore
  })
}

function remove(index) {
  NotificationMessageStore.update(function(currentStore) {
    currentStore.splice(index, 1)

    return currentStore
  })
}

const notificationMessage = {
  subscribe: NotificationMessageStore.subscribe,
  set,
  add,
  remove
}

export { notificationMessage }
