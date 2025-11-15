import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json()).then(data => setData(data))
        
    // },[])
    const data = useLoaderData()
  return (
    <div className='relative flex  justify-center m-4 p-4 text-3xl bg-gray-800 text-white' width={400}>
        <img   className = "m-4" width={300} src = {data?.avatar_url} alt=""/>
        Github followers {data?.followers}

    
        
      
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
