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

PokemonDetail.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      pokedex: PropTypes.string.isRequired,
      shape: PropTypes.string.isRequired,
      typeOne: PropTypes.string.isRequired,
      typeTwo: PropTypes.string.isRequired,
      speed: PropTypes.string.isRequired,
    }).isRequired
  ),
};
