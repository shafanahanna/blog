import React, { useState } from 'react'
import Home from './Home'
import {Routes,Route, NavLink} from 'react-router-dom';
import CreateBlog from './CreateBlog';
import Blogname from './Blogname';
import Blog from './displayblog';
import { createContext } from 'react';
import Notfound from './Notfound';

export const mycontext=createContext()

function MainRouter() {

  const[blogs,setblogs]=useState([{
    
      id:1,
      bloghead: 'The Future of AI in Everyday Life: A Glimpse into Tomorrow',
      blogdata: 'In our fast-evolving digital landscape, artificial intelligence is at the forefront of innovation. In this edition of TechInsider, we delve into the exciting advancements that are shaping the future of AI and its impact on our daily lives. From smart homes to autonomous vehicles, we explore how AI is revolutionizing industries and enhancing the way we interact with technology. Join us on this journey into the future, where the lines between science fiction and reality continue to blur.'

    },
    {
      id:2,
      bloghead: 'Exploring the Enchanting Streets of Kyoto',
      blogdata: 'Welcome to another adventure on Wanderlust Chronicles! In our latest escapade, we find ourselves immersed in the captivating beauty of Kyoto, Japan. From the historic temples to the bustling markets, join us as we navigate the narrow streets and discover the hidden gems that make Kyoto a must-visit destination for any avid traveler. Get ready to be enchanted by the rich culture, exquisite cuisine, and the timeless charm of this ancient city'
    }
  ])
  return (
    <div>
      <nav className='navlink'>
        <NavLink  to='/'>Home</NavLink>
        <NavLink to='/createblog'>CreateBlog</NavLink>
        <NavLink to='/blogname'>Blog Name</NavLink>
      </nav>

      <mycontext.Provider  value={[blogs,setblogs]}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/createblog' element={<CreateBlog/>}/>
            <Route path='/blogname' element={<Blogname/>}/>
            <Route path='blog/:id' element={<Blog />}/>
            <Route path='*' element={<Notfound />}/>

        </Routes>
      </mycontext.Provider>
    </div>
  )
}

export default MainRouter