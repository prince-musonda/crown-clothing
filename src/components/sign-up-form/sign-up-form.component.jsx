import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss'
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormField = {
    displayName:'',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = ()=>{
    const [formField,setFormField] = useState(defaultFormField)
    const {displayName,email,password,confirmPassword} = formField

    async function handleSubmit(event){
        event.preventDefault()
        //check if password and confirm password match
        if(password !== confirmPassword){
          alert('Passwords do not match')
          return;
        }
        try{
            const userAuth = await createAuthUserWithEmailAndPassword(email,password)
            await createUserDocumentFromAuth(userAuth,{displayName})
            alert('success')
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('sorry but the email is already in use')
            }else if(error.code === 'auth/weak-password'){
                alert('password is too WEAK, use atlest 6 characters.')
            }else{
                console.log(error.code)
            }
        }
       
    }
    
    
    function handleChange(event){
        const {name,value} = event.target
        setFormField({...formField,[name]:value})
    }
    
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
             
                <FormInput
                    label='Display name'
                    type="text"
                    id="displayName"
                    required
                    onChange={handleChange}
                    value={displayName}
                    name='displayName'/>

                
                <FormInput 
                label='Email'
                type="email"
                id="email" 
                required 
                onChange={handleChange} 
                value={email} 
                name='email'/>

              
                <FormInput 
                label='Password'
                type="password" 
                id="password" 
                required onChange={handleChange}
                value={password} 
                name='password'/>

                <FormInput 
                label='confirm Password'
                type="password" 
                id="confirmPassword" 
                required 
                onChange={handleChange} 
                value={confirmPassword}
                name='confirmPassword'/>

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm