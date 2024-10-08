import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAQLVaNFl4DLE_kXnPBRe-M_5neyXD-xOs",
  authDomain: "movie-357db.firebaseapp.com",
  projectId: "movie-357db",
  storageBucket: "movie-357db.appspot.com",
  messagingSenderId: "394069365722",
  appId: "1:394069365722:web:3271befb8fb2500f8666e3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split("-").join(" "))
  }
};
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split("-").join(" "))
  }
};
const logout = () => {
  signOut(auth);
};
export { auth, db, login, logout, signUp };
