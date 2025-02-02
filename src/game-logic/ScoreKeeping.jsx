import { useEffect } from "react";

export function keepScore(score, setScore, pokemonId, pokemonIds, setPokemonIds) {
  /*   const pushPokemonId = (id) => { */
  setPokemonIds((prevPokemons) => [...prevPokemons, pokemonId]);
  /*   }; */
  console.log(pokemonIds);

  const incrementScore = (score, setScore) => {
    setScore((score += 1));
    console.log(score);
  };
}
