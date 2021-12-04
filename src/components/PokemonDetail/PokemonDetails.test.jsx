import { screen, render } from '@testing-library/react';
import PokemonDetail from './PokemonDetail';

it('should render a single pokemon', () => {
  render(
    <PokemonDetail
        pokemon={{
          id: 11,
          url_image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
          pokedex: PropTypes.string.isRequired,
          weight: PropTypes.number.isRequired,
          shape: PropTypes.string.isRequired,
          type_1: PropTypes.string.isRequired,
          type_2: PropTypes.string.isRequired,
          speed: PropTypes.number.isRequired,
        }}
  )
})