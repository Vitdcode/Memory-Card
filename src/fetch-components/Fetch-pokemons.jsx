import { useEffect, useRef } from "react";

export default function FetchPokemonNames({ pokemonNames, setPokemonNames }) {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  const hasFetched = useRef(false);

  const fetchPokemon = async (loops = 4) => {
    let attempts = 0;
    const maxAttempts = 5;
    while (pokemonNames.size < loops && attempts < maxAttempts) {
      attempts++;
      console.log(attempts);
      const randomId = Math.floor(Math.random() * 1017) + 1;
      try {
        const response = await fetch(`${baseUrl}${randomId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch pokemon");
        }

        const pokemonData = await response.json();
        console.log(pokemonData);
        setPokemonNames((prevNames) => new Set([...prevNames, pokemonData.name]));
        console.log(pokemonData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (!hasFetched.current) {
      hasFetched.current = true;
      fetchPokemon();
    }
  }, []);
  return;
}
