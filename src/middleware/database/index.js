import { Firestore } from '../../config/firebase'
import FirebaseResults from './firebase_results'

const FirebaseEmployees = Firestore.collection('employees')

export { FirebaseEmployees, FirebaseResults }
