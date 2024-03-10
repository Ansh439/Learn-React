import { useState } from 'react';
import './App.css'

function App() {
  let [Counter,setCounter] = useState('5')
  const vala = ()=>{
    if(Counter < 20)
      setCounter(++Counter);
  }
  const valm = ()=>{
    if(Counter > 0)
      setCounter(--Counter);
  }
  return (
    <>
      <h1>Counter Add or Remove</h1>
      <h3>Counter Value : {Counter}</h3>

      <button onClick={vala}>Add Value {Counter}</button>
      <button onClick={valm}>Remove Value {Counter}</button>
    </>
  )
}

export default App
