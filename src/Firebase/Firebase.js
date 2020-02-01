import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCAm2Hwoh5Ddy-bCLofcehiFJchpLCxjnE",
  authDomain: "crown-db-sys.firebaseapp.com",
  databaseURL: "https://crown-db-sys.firebaseio.com",
  projectId: "crown-db-sys",
  storageBucket: "crown-db-sys.appspot.com",
  messagingSenderId: "465155154689",
  appId: "1:465155154689:web:8a9f03bdba14ca39977100",
  measurementId: "G-DVT5JJ7YRZ"
};

export const createuserProfileDoc = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists){      // 如果user不存在，则创建
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      })
    }catch(error){
      console.log("error creating user", error.message)
    }
  }
  return userRef;  //返回user的信息
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
