import React from 'react';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { fetchPokemon, fetchPokemonTypes } from '../../services/fetchPokemon';
import PokemonList from '../../components/PokemonList/PokemonList';
import Controls from '../../components/Controls/Controls';

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    async function getPokemon() {
      const pokedex = await fetchPokemon();
      // console.log('!!!!!', pokedex);
      setPokemon(pokedex);
      setLoading(false);

      const pokemonTypes = await fetchPokemonTypes();
      setLoading(true);
      setType(pokemonTypes);
      setLoading(false);
    }
    getPokemon();
  }, []);

  if (loading) {
    <Loader type="Puff" color="#00BFFF" height={80} width={80} />;
  }

  return (
    <>
      <h1>Pokémon Compendium</h1>
      <Controls selectedType={selectedType} pokemonTypes={type} handleChange={setType} />
      <PokemonList pokedex={pokemon} />
    </>
  );
}
