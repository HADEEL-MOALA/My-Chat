// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAtk84mPdD1K-zDmbGyLrLxNqwNrOgFv3E",
  authDomain: "my-chat-ba9bd.firebaseapp.com",
  databaseURL: "https://my-chat-ba9bd.firebaseio.com",
  projectId: "my-chat-ba9bd",
  storageBucket: "my-chat-ba9bd.appspot.com",
  messagingSenderId: "425401736806",
  appId: "1:425401736806:web:8a52fb525104e85a32d7a7",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBx4WeTtTt1vLIB5p0Y9SKvNI2Fiw6fkCg",
//   authDomain: "awesome-messenger-faf4c.firebaseapp.com",
//   databaseURL: "https://awesome-messenger-faf4c-default-rtdb.firebaseio.com",
//   projectId: "awesome-messenger-faf4c",
//   storageBucket: "awesome-messenger-faf4c.appspot.com",
//   messagingSenderId: "63470161397",
//   appId: "1:63470161397:web:ee16e4bc31edc3332ee4bc",
//   measurementId: "G-BPH19W4LD7",
// };
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
