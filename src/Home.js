import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
  return (
    <div className='homepage'>
        <h1 >Make your Own..</h1>
        <button onClick={()=>navigate('/createblog')}>Create Blog</button>
    </div>
  )
}

export default Home