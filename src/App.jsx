import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [, setJokes] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:7700/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      <h1>Full Stack Dev. with Hitesh </h1>
      <h2>(chai aur code..!)</h2>

      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index)=>{
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.contant}</p>
          </div>
          
        })
      }
    </>
  )
}

export default App
