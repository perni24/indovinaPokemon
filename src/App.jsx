import { useState } from 'react'
import StartPage from './components/startPage/startPage'
import './App.css'

function App() {

  const [gameState, setGameState] = useState(1)

  return (
    <>
      <div className='app'>
      {gameState === 1 ? <StartPage/>:""}
      </div>
    </>
  )
}

export default App
