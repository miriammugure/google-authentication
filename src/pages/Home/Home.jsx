import React from 'react'
import '../Login/signIn.css'
function Home() {
  const logout =()=>{
    localStorage.clear();
    window.location.reload()
  }
  return (
    <div>
   
     
        <button onClick={logout} className='btnf'>log out</button>
     
     
    </div>
  )
}

export default Home
