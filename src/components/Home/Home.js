import React from 'react'
import '../../App.css'
import { Routes, Route, Link } from 'react-router-dom'  

function Home() {
    document.body.className = 'App';
  return (
    
    <div className='App'>
      <div>
      <img src='https://occ-0-784-769.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABekGfcjcxKQH35sJxlr2te1JNYCwXqpovwMvTf4gzZ1ihzzUY0M8YcEijgvL_ClD5aIMWEY-hKIZVmgthEVssV7SthGRm2xVXkuwzpphv6u0.png?r=a66'></img>
      </div>
      <Link to="/Characters"><h1 className='tituloCard'>Characters</h1></Link>
    </div>
  )
}

export default Home