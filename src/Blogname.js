import React, { useContext } from 'react'
import { mycontext } from './MainRouter';
import { useNavigate } from 'react-router-dom';


function Blogname() {
  const [blogs, ] = useContext(mycontext)
  const navigate = useNavigate()
  return (
    <div>

        <ul style={{listStyleType:'none'}}>
           {blogs.map((blog)=>(
            <li>
              <button className='displaybutton' onClick={()=>{navigate(`/blog/${blog.id}`)}}><h1> 🔹 {blog.bloghead} </h1></button>
            </li>
           ))}
        </ul>
    </div>
  )
}

export default Blogname