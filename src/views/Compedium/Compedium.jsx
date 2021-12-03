import React from 'react';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { fetchPokemon } from '../../services/fetchPokemon';
import PokemonList from '../../components/PokemonList/PokemonList';

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const pokedex = await fetchPokemon();
      // console.log('!!!!!', pokedex);
      setPokemon(pokedex);
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

      <PokemonList pokedex={pokemon} />
    </>
  );
}
