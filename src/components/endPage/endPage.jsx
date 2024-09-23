import './EndPage.css'

function EndPage({punteggio}) {

  return (
    <>
      <div className='endContainer'>
        Game Over 
      </div>
      <div><b>punteggio : {punteggio}</b></div>
    </>
  )
}

export default EndPage
