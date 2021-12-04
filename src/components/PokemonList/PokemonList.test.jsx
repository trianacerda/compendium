import { screen, render } from '@testing-library/react';
import PokemonList from './PokemonList';

it('should render a single pokemon', () => {
  render(
    <PokemonList
      pokedex={[
        {
          id: 11,
          url_image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
          pokedex: 'https://www.pokemon.com/us/pokedex/butterfree',
          weight: 11,
          shape: 'egg',
          type_1: 'bug',
          type_2: 'flying',
          speed: 11,
        },
        {
          id: 24,
          url_image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
          pokedex: 'https://www.pokemon.com/us/pokedex/pidgeotto',
          weight: 100,
          shape: 'upright',
          type_1: 'fairy',
          type_2: 'fire',
          speed: 55,
        },
        {
          id: 81,
          url_image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png',
          pokedex: 'https://www.pokemon.com/us/pokedex/arbok',
          weight: 10,
          shape: 'egg',
          type_1: 'psychic',
          type_2: 'fire',
          speed: 14,
        },
        {
          id: 20,
          url_image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
          pokedex: 'https://www.pokemon.com/us/pokedex/jigglypuff',
          weight: 20,
          shape: 'egg',
          type_1: 'fairy',
          type_2: 'NA',
          speed: 99,
        },
      ]}
    />
  );

  const pokedex = screen.getByRole('list', { name: 'pokemon-list' });
  expect(pokedex).toMatchSnapshot();
});
