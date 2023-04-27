import { useState } from 'react'
import WindowTracker from './ui/windowtracker'
import './App.css'

function App() {

  const [show, setShow] = useState(true)

  function Handle(){
      setShow(old => !old)
  }

  return (
    <>
      <button onClick={Handle}>Toggle WindowTracker</button>
      {show === true && <WindowTracker/>}
    </>
  )
}

export default App
