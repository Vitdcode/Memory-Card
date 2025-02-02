import { useEffect, useRef } from "react";

export default function FetchPokemonData({ pokemonData, setPokemonData }) {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  const hasFetched = useRef(false);

  const fetchPokemon = async (loops = 10) => {
    let attempts = 0;

    while (pokemonData.length < loops && attempts < loops) {
      attempts++;
      const randomId = Math.floor(Math.random() * 1017) + 1;
      try {
        const response = await fetch(`${baseUrl}${randomId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch pokemon");
        }

        const pokemonData = await response.json();
        setPokemonData((prevPokemon) => [
          ...prevPokemon,
          {
            id: crypto.randomUUID(),
            name: pokemonData.name,
            imageUrl: pokemonData.sprites.front_default,
          },
        ]);
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
