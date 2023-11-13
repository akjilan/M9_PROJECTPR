import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title,body}=post;
    const navigator = useNavigate();
    const handleButton =()=>{
        navigator(`/post/${id}`);

    }

  return (
    <div className=' text-center border-2 border-sky-400 p-5 shadow-md font-bold '>
        <h2>id: {id}</h2>
        <h3>title:{title}</h3>        
        <p>{body}</p>
        <div className='flex  justify-center mt-3'>
        <p className=' p-1 bg-purple-300 border-gray-100 shadow-lg outline-1 rounded w-24'><Link className='font-bold leading-4'  to={`/post/${id}`}>See Details</Link></p>
        </div>
        <div className='flex  justify-center mt-3'>
        <p className=' p-1 bg-purple-300 border-gray-100 shadow-lg outline-1 rounded w-24'><button onClick={handleButton}>See details..</button></p>
        </div>

    </div>
  )
}

export default Post