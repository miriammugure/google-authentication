import React from 'react'

function Home() {
  const logout =()=>{
    localStorage.clear();
    window.location.reload()
  }
  return (
    <div>
      
     <button onClick={logout}>log out</button>
    </div>
  )
}

export default Home
