import { useState } from 'react'
import StartPage from './components/startPage/startPage'
import GamePage from './components/gamePage/gamePage'
import EndPage from './components/endPage/endPage'
import './App.css'

function App() {

  const [gameState, setGameState] = useState(1)
  const [punteggio, setPunteggio] = useState(0);

  return (
    <>
      <div className='app'>
        <div className='cerchio'>
          <div className='cerchio2'>
            {gameState === 1 ? <StartPage gameState={gameState} setGameState={setGameState}/>: gameState === 2 ? <GamePage gameState={gameState} setGameState={setGameState} punteggio={punteggio} setPunteggio={setPunteggio}/> : <EndPage punteggio={punteggio}/>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App