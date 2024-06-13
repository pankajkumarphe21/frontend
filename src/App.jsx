import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [jokes,setJokes]=useState([]);
  useEffect(()=>{
    axios.get('/api/jokes').
    then((response)=>{
      setJokes(response.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full bg-zinc-900 text-white'>
      <h1 className='text-5xl mb-4'>Jokes: {jokes.length}</h1>
      {
        jokes.map((joke,index)=>(
          <div className='mb-3' key={index}>
            <h3 className='flex justify-center mt-2 text-xl'>{joke.title}</h3>
            <h3 className='flex justify-center mt-2 text-xl'>{joke.joke}</h3>
          </div>
        ))
      } 
    </div>
  )
}

export default App