export const fetchPokemon = async () => {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);

  const pokemonData = await response.json();
  const results = pokemonData.results;
  return results;
};

export const fetchPokemonTypes = async () => {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);

  const pokemonTypes = await response.json();
  // console.log('pokemon', pokemonTypes);

  return pokemonTypes;
};

export const fetchFilteredPokemon = async (type) => {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}`);

  const filteredPokemon = await response.json();

  return filteredPokemon.results;
};

export const fetchSortedPokemon = async (order) => {
  const response = await fetch(
    `  https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=defence&direction=${order}`
  );

  const sortedPokemon = await response.json();

  return sortedPokemon.results;
};
