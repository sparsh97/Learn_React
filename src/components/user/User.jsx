import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-400 text-center p-4 font-semibold text-2xl'>User: {userid}</div>
  )
}

export default User