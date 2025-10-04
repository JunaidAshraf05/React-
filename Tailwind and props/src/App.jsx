import { useState } from 'react'
const [count, setCount] = useState(0)
import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind Test
        </h1>
        <Card />
        

    </>
  )
}

export default App
