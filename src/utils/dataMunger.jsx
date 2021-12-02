export const dataMunger = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.pokemon,
    picture: pokemon.url,
    pokedex: pokemon.pokemon,
    shape: pokemon.shape,
    typeOne: pokemon.type_1,
    typeTwo: pokemon.type_2,
    speed: pokemon.speed,
  };
};
