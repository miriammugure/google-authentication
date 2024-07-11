import React, { useEffect, useState } from 'react';
import {auth,provider} from'./config.js'
import { signInWithPopup } from 'firebase/auth';
import Home from '../Home/Home.jsx';
import './signIn.css'
function Signin() {
    const[value,setValue]=useState("");
    const handleClick =()=>{
        signInWithPopup (auth,provider).then((data)=>{
          console.log(data.user.email,data.user.displayName,data.user.photoURL)
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

  //   const appid=873227501313807;
  // const secret=09cc687a60a5fa2401705231e9311c8b;
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
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
    <button onClick={handleClick} className='btnf'>Continue with google</button> 
    <button onClick={handleClick} className='btnf'>Continue with facebook</button> 
    </div>
   
</div>
 




}
  




 



 


 
     

    </>
  )
}

export default Signin
