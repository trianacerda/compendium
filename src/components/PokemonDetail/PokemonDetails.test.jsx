import { screen, render } from '@testing-library/react';
import PokemonDetail from './PokemonDetail';

it('should render a single pokemon', () => {
  render(
    <PokemonDetail
      pokemon={{
        id: 11,
        url_image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
        pokedex: 'https://www.pokemon.com/us/pokedex/butterfree',
        weight: 11,
        shape: 'egg',
        type_1: 'bug',
        type_2: 'flying',
        speed: 11,
      }}
    />
  );

  const pokemon = screen.getByText(/egg/i);
  expect(pokemon).toMatchSnapshot();
});
