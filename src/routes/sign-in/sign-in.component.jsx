import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
const SignIn = ()=>{
    const signIn = async () =>{
        const userAuth = await  signInWithGooglePopup()
        createUserDocumentFromAuth(userAuth)
    }
    return(
        <div>
            <h1>sign in page</h1>
            <button onClick={signIn}>sign in with google pop up</button>
        </div>
    )
}

export default SignIn