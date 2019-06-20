import { Firestore } from '../../config/firebase'
import FirebaseResults from './firebase_results'

const FirebaseEmployees = Firestore.collection('employees')
const FirebaseTeams = Firestore.collection('teams')

export { FirebaseEmployees, FirebaseResults, FirebaseTeams }
