import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNTE84W2kV4yhOK7JJ52Z0KAo8Ylj5VcA",
  authDomain: "rumapetsreact.firebaseapp.com",
  projectId: "rumapetsreact",
  storageBucket: "rumapetsreact.appspot.com",
  messagingSenderId: "239842225225",
  appId: "1:239842225225:web:dc3cfb0659bd9224b2e398",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
