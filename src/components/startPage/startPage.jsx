import './StartPage.css'

function StartPage({gameState,setGameState}) {



  return (
    <>
        <div className='startContainer'>
          <p>Who's That Pokemon</p>
          <button className='startButton' onClick={() => setGameState(gameState+1)}>start</button>
        </div>
    </>
  )
}

export default StartPage
