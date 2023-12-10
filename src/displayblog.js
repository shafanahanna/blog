import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { mycontext } from './MainRouter'

function Blog() {
    const params=useParams()
    const blogid=params.id

    const [blogs, ]=useContext(mycontext)
  return (
    <div> 
        <h1 className='heading'>{blogs[blogid-1].bloghead}</h1>
        <div>
            <p className='content'>{blogs[blogid-1].blogdata}</p>
        </div>
    </div>
  )
}

export default Blog