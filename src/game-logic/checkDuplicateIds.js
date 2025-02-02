export default function checkDuplicateIds(pokemonIdsRef, pokemonId) {
  const idIsDuplicate = pokemonIdsRef.current.some((id) => id === pokemonId);
  console.log(idIsDuplicate);
  return idIsDuplicate;
}
