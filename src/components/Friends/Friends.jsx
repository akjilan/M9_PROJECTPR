import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Friends = () => {

    const data = useLoaderData();
    console.log(data);
  return (
    <div>Friends</div>
  )
}

export default Friends

