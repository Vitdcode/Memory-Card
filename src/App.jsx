import { useRef, useState } from "react";
import "./App.css";
import DisplayPokemon from "./display-components/DisplayImage";
import FetchPokemonData from "./fetch-components/Fetch-pokemons";
import Score from "./display-components/DisplayScore";
import populateIDs from "./game-logic/populateIDs";
import checkDuplicateIds from "./game-logic/checkDuplicateIds";
import increaseScore, { increaseBestScore } from "./game-logic/increaseScore";
import shufflePokemon from "./game-logic/shufflePokemon";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const pokemonIdsRef = useRef([]);

  const handlePokemonClick = (pokemonId) => {
    setPokemonData(shufflePokemon(pokemonData));
    const idIsDuplicate = checkDuplicateIds(pokemonIdsRef, pokemonId);
    populateIDs(pokemonId, pokemonIdsRef);
    !idIsDuplicate
      ? increaseScore(score, setScore)
      : (increaseBestScore(score, setScore, bestScore, setBestScore),
        (pokemonIdsRef.current.length = 0));
  };

  return (
    <>
      <Score score={score} bestScore={bestScore} />
      <FetchPokemonData pokemonData={pokemonData} setPokemonData={setPokemonData} />
      <DisplayPokemon pokemonArray={pokemonData} handlePokemonClick={handlePokemonClick} />
    </>
  );
}

export default App;
