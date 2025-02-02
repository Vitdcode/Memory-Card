import { keepScore } from "../game-logic/ScoreKeeping";

export default function DisplayPokemon({ pokemonObj, handlePokemonClick }) {
  const pokemonArray = Array.from(pokemonObj);
  return (
    <div className="all-pokemon-wrapper">
      {pokemonArray.map((pokemon) => (
        <div
          key={pokemon.id}
          className="pokemon-wrapper"
          onClick={() => handlePokemonClick(pokemon.id)}
        >
          <img src={pokemon.imageUrl} alt="Pokemon image" />
          <h1>{pokemon.name}</h1>
        </div>
      ))}
    </div>
  );
}
