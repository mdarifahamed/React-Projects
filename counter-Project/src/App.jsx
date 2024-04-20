import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCouter]= useState(0) // hooks need
  // const [count, setCount] = useState(0)
  // let counter = 15

  const addValue = () =>{
   // counter = counter + 1
    setCouter(counter + 1)

   
    
  }

  const removeValue = () =>{
    setCouter(counter - 1);

  }

  return (
    <>
      <h1>Hello react developer</h1>
      <h1>counter value: {counter}</h1>

      <button onClick={addValue}>Add value{counter}</button> 
      <br />
      <button onClick={removeValue}>remove Value{counter}</button>
    </>
  )
}

export default App
