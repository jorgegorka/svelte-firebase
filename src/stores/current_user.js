import { writable } from "svelte/store";

const userInfo = writable({});

const setUser = user => {
  userInfo.set(user);
};

const removeUser = () => {
  userInfo.set({});
};

const currentUser = {
  subscribe: userInfo.subscribe,
  set: setUser,
  remove: removeUser
};

export { currentUser };
