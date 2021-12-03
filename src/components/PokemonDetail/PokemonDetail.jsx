import PropTypes from 'prop-types';

export default function PokemonDetail({ pokemon }) {
  const secondType = pokemon.type_2 !== 'NA';
  const secondAbility = pokemon.ability_2 !== 'NA';

  return (
    <figure aria-label="pokemon">
      <img src={pokemon.url_image} alt={`${pokemon.pokemon}`} />
      <div className="pokemon-detail">
        <a href={pokemon.pokedex}>{pokemon.pokemon}</a>
        <p>
          Abilities:
          {pokemon.ability_1}
          {secondAbility && `/${pokemon.ability_2}`}
        </p>
        <p></p>
        <p>Weight: {pokemon.weight}</p>
        <p>Shape: {pokemon.shape}</p>
        <p>
          Types:
          {pokemon.type_1}
          {secondType && `/${pokemon.type_2}`}
        </p>
        <p>Speed:{pokemon.speed}</p>
      </div>
    </figure>
  );
}

PokemonDetail.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url_image: PropTypes.string.isRequired,
    pokedex: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    shape: PropTypes.string.isRequired,
    type_1: PropTypes.string.isRequired,
    type_2: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
  }).isRequired,
};
