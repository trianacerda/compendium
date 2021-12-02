import PropTypes from 'prop-types';
import { BrowserRouter, NavLink } from 'react-router-dom';

export default function PokemonDetail({ pokemon }) {
  const { name, picture, pokedex, shape, typeOne, typeTwo, speed } = pokemon;

  const secondType = typeTwo !== 'NA';

  return (
    <BrowserRouter>
      <figure aria-label="pokemon">
        <img src={picture} alt={`${name}`} />
        <div className="pokemon-detail">
          <h2>Name: {name}</h2>
          <NavLink to={pokedex}>{name}</NavLink>
          <p>Shape: {shape}</p>
          <p>
            Types:
            {typeOne}
            {secondType && `/${typeTwo}`}
          </p>
          <p>Speed:{speed}</p>
        </div>
      </figure>
    </BrowserRouter>
  );
}

PokemonDetail.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    pokedex: PropTypes.string.isRequired,
    shape: PropTypes.string.isRequired,
    typeOne: PropTypes.string.isRequired,
    typeTwo: PropTypes.string.isRequired,
    speed: PropTypes.string.isRequired,
  }).isRequired,
};
