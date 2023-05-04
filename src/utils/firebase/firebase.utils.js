import {initializeApp} from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
} from 'firebase/auth'

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBXjXlP3BiMT8OBjRnKdZobP2TrM7iBOL4",
    authDomain: "crown-clothing-db-c659a.firebaseapp.com",
    projectId: "crown-clothing-db-c659a",
    storageBucket: "crown-clothing-db-c659a.appspot.com",
    messagingSenderId: "81007292653",
    appId: "1:81007292653:web:719d9ed933d0d8edd21ce4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    'prompt':'select_account'
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
 
  export const db = getFirestore()

  export const createUserDocumentFromAuth = async(userAuth,additionalInfo)=>{
    // console.log(userAuth)
    const userDocRef = doc(db,'users',userAuth.user.uid);
    const userSnapShot = await getDoc(userDocRef)
    
    if(!userSnapShot.exists()){
        // create / set the document with the data from userAuth in my collection
        const {displayName,email} = userAuth.user
        const createdAt = new Date()
        try{
            await setDoc(userDocRef,
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalInfo
                })

        }catch(error){
            console.log('could not save new user to database',error.message)
        }
   
    }
}


  export const createAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;
    const res = await createUserWithEmailAndPassword(auth,email,password)
    return res
  } 

  export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
    if(!email || !password) return;
    const res = await signInWithEmailAndPassword(auth,email,password)
    return res
  } 

