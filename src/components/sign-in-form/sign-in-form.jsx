import './sign-in-form.styles.scss'
import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { signInWithGooglePopup,createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const signInWithGoogle= async () =>{
    const user = await  signInWithGooglePopup()
    createUserDocumentFromAuth(user)
}
const defaultFormField = {email:'',password:''}

function SignInForm(){
    const [formField,setFormField] = useState(defaultFormField)
    const {email,password} = formField;
    
    function resetFormFields(){
        setFormField(defaultFormField)
    }

    async function handleSubmit(event){
        event.preventDefault()
        try{
            const res = await signInAuthUserWithEmailAndPassword(email,password)
            console.log(res)
            resetFormFields()
        }catch(error){
            if(error.code === 'auth/network-request-failed'){
                alert('network connection problems')
            }else if (error.code === 'auth/wrong-password'){
                alert('sorry, but you have provided an invalid password')
            }else if(error.code === 'auth/user-not-found'){
                alert('Invalid credentials, please create an account')
            }
        }
    }
    function handleChange(event){
        const value = event.target.value
        const name = event.target.name
        setFormField({...formField,[name]:value})
    }
    return(
        <div className='sign-up-container'>
            <h1>Alrady have an acccount</h1>
            <span>sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    onChange={handleChange}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <Button>Sign IN</Button> 
                    <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>
                </div>
               
            </form>
        </div>
    )
}

export default SignInForm