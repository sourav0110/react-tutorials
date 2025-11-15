import React from 'react'

import { useParams } from 'react-router'

function User() {
  const {userid} = useParams()
  return (
    <div className='relative flex  justify-center bg-orange-500 text-white'>
      User : {userid}
    </div>
  )
}

export default User
