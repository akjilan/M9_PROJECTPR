import React from 'react'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
  const {email,phone,name,id}= friend;
  return (
    <div className=' text-center border-2 border-sky-400 p-5 shadow-md font-bold '>
       <h3 className=''>{name}</h3>
        <h3>email:{email}</h3>
        <h3>phone:{phone}</h3>
        <div className='flex  justify-center mt-3'>
        <p className=' p-2 bg-purple-300 border-gray-100 shadow-lg outline-1 rounded w-24'><Link className='font-bold leading-4'  to={`/friend/${id}`}>See Details</Link></p>
        </div>
    </div>
  )
}

export default Friend