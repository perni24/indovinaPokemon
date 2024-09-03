import "./GamePage.css";
import { useState, useEffect } from "react";

function GamePage({ gameState, setGameState }) {
  const [pokemon, setPokemon] = useState(null);
  const [punteggio, setPunteggio] = useState(0);
  const [vite, setVite] = useState(10);
  const [skip, setSkip] = useState(3);
  const [risposta, setRisposta] = useState("");
  const [colore, setColore] = useState("white");
  const [shakeClass, setShakeClass] = useState("");

  useEffect(() => {
    fetchData();
  }, [punteggio, skip]);

  useEffect(() => {
    if (vite === 0) {
      setGameState(gameState + 1);
    }
  }, [vite]);

  const azioneRisposta = (ris) => {
    if (ris === 1) {
      setColore("green");
      setShakeClass("shake-vertical"); // Animazione su-giù
    } else {
      setColore("red");
      setShakeClass("shake-horizontal"); // Animazione destra-sinistra
    }

    setTimeout(() => {
      setColore("white"); // Ritorna al bianco dopo 1 secondo
      setShakeClass(""); // Rimuove l'animazione dopo 1 secondo
    }, 1000);
  };

  const fetchData = async () => {
    const numeroCasuale = Math.floor(Math.random() * 1008) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-form/${numeroCasuale}/`
    );
    const jsonData = await response.json();
    setPokemon(jsonData);
  };

  const controlla = () => {
    if (risposta === pokemon.name) {
      setPunteggio(punteggio + 1);
      azioneRisposta(1);
    } else {
      setVite(vite - 1);
      azioneRisposta(0);
    }
  };

  return (
    <>
      <div className="containerPunteggio">
        <p>
          <b>Vite :</b> {vite}
        </p>
        <p>
          <b>Punteggio :</b> {punteggio}
        </p>
        <p>
          <b>Skip :</b> {skip}
        </p>
      </div>
      <img
        id="img_pokemon"
        src={pokemon !== null ? pokemon.sprites.front_default : null}
      />
      <p>id : {pokemon !== null ? pokemon.id : null}</p>
      <div className={`containerAzioni ${shakeClass}`}>
        <input
          type="text"
          value={risposta}
          onChange={(e) => setRisposta(e.target.value)}
          style={{ backgroundColor: colore }} // Colore dinamico applicato all'input
        />
        <button onClick={controlla}>invia</button>
        <button onClick={() => (skip > 0 ? setSkip(skip - 1) : null)}>skip</button>
      </div>
    </>
  );
}

export default GamePage;
