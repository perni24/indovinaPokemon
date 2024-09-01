import "./GamePage.css";
import { useState, useEffect } from "react";

function GamePage({gameState,setGameState}) {
  const [pokemon, setPokemon] = useState(null);
  const [punteggio, setPunteggio] = useState(0);
  const [vite, setVite] = useState(10);
  const [skip, setSkip] = useState(3)
  const [risposta, setRisposta] = useState("")

  useEffect(() => {
    fetchData();
  }, [punteggio,skip]);

  useEffect(() => {
    if(vite === 0){
      setGameState(gameState+1)
    }
  }, [vite])

  const fetchData = async () => {
    const numeroCasuale = Math.floor(Math.random() * 1008) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-form/${numeroCasuale}/`
    );
    const jsonData = await response.json();
    setPokemon(jsonData);
  };

  const controlla = () => {
    if(risposta === pokemon.name){
      setPunteggio(punteggio+1)
    }else{
      setVite(vite-1)
    }
  };

  return (
    <>
      <div className="containerPunteggio">
        <p><b>Vite : </b>{vite}</p>
        <p><b>Punteggio : </b>{punteggio}</p>
        <p><b>Skip : </b>{skip}</p>
      </div>
      <img
        id="img_pokemon"
        src={pokemon !== null ? pokemon.sprites.front_default : null}
      />
      <p>id : {pokemon !== null ? pokemon.id : null}</p>
      <div className="containerAzioni">
        <input type="text"  value={risposta} onChange={(e) => setRisposta(e.target.value)}/>
        <button onClick={controlla}>invia</button>
        <button onClick={() => skip > 0 ? setSkip(skip-1) : null}>skip</button>
      </div>
    </>
  );
}

export default GamePage;
