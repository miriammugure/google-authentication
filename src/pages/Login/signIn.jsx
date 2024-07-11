import React, { useEffect, useState } from 'react';
import {auth,provider} from'./config.js'
import { authf,providerf } from './configFacebook.js';
import { signInWithPopup } from 'firebase/auth';
import Home from '../Home/Home.jsx';
import './signIn.css'
function Signin() {
    const[value,setValue]=useState("");
    const handleGoogleClick =()=>{
      
        signInWithPopup (auth,provider).then((data)=>{
          console.log(data.user.email,data.user.displayName,data.user.photoURL)
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

    const handleFacebookClick=()=>{
   signInWithPopup(authf,providerf).then((data)=>{
    console.log(data.user.email)
    setValue(data.user.email)
    localStorage.setItem("email",data.user.email)
   })
    }
  return (
    <>
    { value ? <Home/> :  

    <div class="container">
    <form class="signin-form">
        <h2>Sign In</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        
        <button type="submit">Sign In</button>
    </form>
    <div className="continue">
    <button onClick={handleGoogleClick} className='btnf'>Continue with google</button> 
    <button onClick={handleFacebookClick} className='btnf'>Continue with facebook</button> 
    </div>
   
</div>
 




}
  




 



 


 
     

    </>
  )
}

export default Signin
