import PropTypes from 'prop-types';

export default function PokemonDetail({ pokemon }) {
  const secondType = pokemon.type_2 !== 'NA';
  const secondAbility = pokemon.ability_2 !== 'NA';

  return (
    <figure aria-label="pokemon">
      <img
        src={pokemon.url_image}
        alt={`${pokemon.pokemon}`}
        style={{
          backgroundColor: 'black',
          borderBlockColor: 'white',
          border: 'dotted',
          margin: '10px',
          height: '200px',
          width: '200px',
        }}
      />
      <div className="pokemon-detail">
        <a
          href={pokemon.pokedex}
          style={{
            border: 'solid',
            color: 'lime',
            justifyContent: 'center',
            displayFlex: 'flex-wrap',
            textAlign: 'center',
          }}
        >
          {pokemon.pokemon}
        </a>
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
