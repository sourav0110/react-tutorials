import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
 const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {setUser} = useContext(UserContext)
  const handleLogin = (e) =>{

    e.preventDefault()
    setUser({username,password})
  }
  return (
    <>
    <h2>Login Page</h2>
    <input type="text" placeholder="Please enter the usename" value={username} onChange={(e) => setUsername(e.target.value)} />
    <input type="password" placeholder="Please enter the password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button onClick={handleLogin}>Login</button>
</>

  )
}

export default Login;
