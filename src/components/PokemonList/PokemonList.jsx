import PropTypes from 'prop-types';
import PokemonDetail from '../PokemonDetail/PokemonDetail';

export default function PokemonList({ pokedex }) {
  return (
    <ul aria-label="pokemon-list" className="pokemon-List">
      {pokedex.map((pokemon) => {
        return (
          <li className="single-pokemon" key={pokemon.id}>
            <PokemonDetail pokemon={pokemon} />
          </li>
        );
      })}
    </ul>
  );
}

PokemonList.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url_image: PropTypes.string.isRequired,
      pokedex: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
      shape: PropTypes.string.isRequired,
      type_1: PropTypes.string.isRequired,
      type_2: PropTypes.string.isRequired,
      speed: PropTypes.number.isRequired,
    }).isRequired
  ),
};
