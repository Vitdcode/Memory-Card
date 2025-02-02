export default function DisplayPokemon({ names }) {
  console.log(names);
  const pokemonNames = Array.from(names);
  console.log(pokemonNames);
  return (
    <div className="images-wrapper">
      {pokemonNames.map((name) => (
        <h1 key={name}>{name}</h1>
      ))}
    </div>
  );
}
