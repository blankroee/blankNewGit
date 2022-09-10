import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWV4m4o6lM9WVXdBgg4mMOyRtDhvZKRZs",
  authDomain: "blank-b71fc.firebaseapp.com",
  projectId: "blank-b71fc",
  storageBucket: "blank-b71fc.appspot.com",
  messagingSenderId: "563188148506",
  appId: "1:563188148506:web:ef0e47f65b23f1b04aa4a3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const creatUserDocumentByAuth = async (userAuth: any) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error: unknown) {
      console.log("error creating the user", error);
    }
  }

  return userDocRef;
};
