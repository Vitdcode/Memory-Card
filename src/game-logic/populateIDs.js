export default function populateIDs(pokemonId, pokemonIdsRef) {
  pokemonIdsRef.current.push(pokemonId);
}
