import PropTypes from 'prop-types';

export default function PokemonDetail({ pokemon }) {
  const { name, picture, pokedex, shape, typeOne, typeTwo, speed } = pokemon;

  const secondType = typeTwo !== 'NA';

  return (
    <figure aria-label="pokemon">
      <img src={picture} alt={`${name}`} />
      <div className="pokemon-detail">
        <h2>Name: {name}</h2>
        <p>Link: {pokedex}</p>
        <p>Shape: {shape}</p>
        <p>
          Types:
          {typeOne}
          {secondType && `/${typeTwo}`}
        </p>
        <p>Speed:{speed}</p>
      </div>
    </figure>
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
