export const fetchPokemon = async () => {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);

  const pokemonData = await response.json();
  const results = pokemonData.results;
  return results;
};

export const fetchPokemonTypes = async () => {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);

  const pokemonTypes = response.json();
  console.log('pokemon', pokemonTypes);

  return pokemonTypes;
};
