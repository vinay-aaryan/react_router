import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-green-700 text-amber-50 font-bold text-2xl p-4 m-8'>
      User : {userid}
    </div>
  ) 
}

export default User
