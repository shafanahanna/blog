import React from 'react'
import { useNavigate  } from 'react-router-dom'
import { useRef, useContext } from 'react';
import { mycontext } from './MainRouter';



function CreateBlog() {

  const [blogs,setblogs]=useContext(mycontext)



  const nameref=useRef(null)
  const blogref=useRef(null)
  const navigate=useNavigate()


  const posting=()=>{
    nameref && blogref && setblogs([...blogs,{
      id:blogs.length+1,
      bloghead:nameref.current.value,
      blogdata:blogref.current.value
    }])
    nameref.current.value=''
    blogref.current.value=''
    window.alert('Your Blog is successfully Posted')
}

  return (
    <div  className='create'>
      
        <>
        <h1 style={{textAlign:'center',marginTop:'20px'}}> Start to Write...</h1>
        <label >Blog Name </label><br/><br/>
         <input type='text' ref={nameref} style={{width:'30%',height:'4vh' ,border:'2px solid black'}}></input><br/><br/>
        <label style={{margintop:'25px',textAlign:'left'}}>Create Blog Content</label><br/><br/>
        <textarea style={{width:'90%',height:'30vh',border:' 2px solid black',fontSize:'20px'}} ref={blogref}></textarea><br/><br/>

        <div className='btn'>
            <button className='btn1' onClick={posting}>Post</button>
            <button className='btn2' onClick={()=>{navigate('/blogname')}}>See Blog</button>
        </div>
        
        </>
        
    </div>
  )
}

export default CreateBlog