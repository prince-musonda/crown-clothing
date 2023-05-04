import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"

import { 
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"

const logGoogleUser= async () =>{
    const user = await  signInWithGooglePopup()
    createUserDocumentFromAuth(user)
}


const SignIn = ()=>{
    return(
        <div>
            <h1>sign in page</h1>
            <button onClick={logGoogleUser}>sign in with google pop up</button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn