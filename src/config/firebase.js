import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'
import 'firebase/firebase-functions'
import 'firebase/firebase-storage'

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

firebase.initializeApp(config)

const Firestore = firebase.firestore()
const Auth = firebase.auth()
const Functions = firebase.app().functions('europe-west1')
const Storage = firebase.storage()

export { Firestore, Auth, Functions, Storage }
