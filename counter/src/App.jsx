import { useState} from 'react'
import './App.css'




function App() {

  let[counter, setCounter] = useState(15);
  
  //let counter = 55;
  
  const addValue = () => {
    
   setCounter(counter + 1);
  }
  return (
    <>
     <h1>Junaid Ashraf </h1>
     <h2>counter value :{counter}</h2>

      <button
      onClick={addValue}>Increment{counter}</button>
      <br />
      <button>Decrement</button>
      
      <button>Reset</button>
      
    </>
  )
}

export default App
