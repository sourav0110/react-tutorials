import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
const {user} = useContext(UserContext)

if (!user) return <div>Please login</div>
else return <p>Welcome {user.username}</p>
  
}

export default Profile
