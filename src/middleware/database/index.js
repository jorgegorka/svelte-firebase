import { Firestore } from "../../config/firebase";
import FirebaseResults from "./firebase_results";

const Clients = Firestore.collection("clients");
const Companies = Firestore.collection("companies");
const FirebaseEmployees = Firestore.collection("employees");
const FirebaseProjects = Firestore.collection("projects");
const FirebaseTeams = Firestore.collection("teams");
const FirebaseTasks = Firestore.collection("tasks");
const FirebaseSchedules = Firestore.collection("schedules");

export {
  Clients,
  Companies,
  FirebaseEmployees,
  FirebaseResults,
  FirebaseProjects,
  FirebaseTasks,
  FirebaseTeams,
  FirebaseSchedules
};
