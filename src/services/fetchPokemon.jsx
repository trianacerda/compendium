export const fetchPokemon = async () => {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);

  const pokemonData = await response.json();
  console.log('pokemon', pokemonData.results);
  return pokemonData.results;
};
