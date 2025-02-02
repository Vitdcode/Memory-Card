import { useState } from "react";
import "./App.css";
import FetchPokemonNames from "./fetch-components/Fetch-pokemons";
import DisplayPokemon from "./display-components/DisplayImage";

function App() {
  const [pokemonNames, setPokemonNames] = useState(new Set());
  return (
    <>
      <FetchPokemonNames pokemonNames={pokemonNames} setPokemonNames={setPokemonNames} />
      <DisplayPokemon names={pokemonNames} />;
    </>
  );
}

export default App;
