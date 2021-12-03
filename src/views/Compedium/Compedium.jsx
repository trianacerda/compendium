import React from 'react';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import {
  fetchFilteredPokemon,
  fetchPokemon,
  fetchPokemonTypes,
  fetchSortedPokemon,
} from '../../services/fetchPokemon';
import PokemonList from '../../components/PokemonList/PokemonList';
import Controls from '../../components/Controls/Controls';

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    async function getPokemon() {
      const pokedex = await fetchPokemon();
      setPokemon(pokedex);

      const pokemonTypes = await fetchPokemonTypes();
      setAllTypes(pokemonTypes);
      setLoading(false);
    }
    getPokemon();
  }, []);

  useEffect(() => {
    async function getSelectedPokemonType() {
      if (!selectedType) return;
      setLoading(true);

      if (selectedType !== 'all') {
        const selectedPokemon = await fetchFilteredPokemon(selectedType);
        setPokemon(selectedPokemon);
      } else {
        const pokedex = await fetchPokemon();
        setPokemon(pokedex);
      }
      setLoading(false);
      setSelectedType(selectedType);
    }
    getSelectedPokemonType();
  }, [selectedType]);

  useEffect(() => {
    async function sortPokemon() {
      if (!sortOrder) return;
      setLoading(true);

      if (sortOrder === 'desc') {
        const sortedPokemon = await fetchSortedPokemon(sortOrder);
        setPokemon(sortedPokemon);
      } else {
        const pokedex = await fetchPokemon();
        setPokemon(pokedex);
      }
      setLoading(false);
      setSortOrder(sortOrder);
    }
    sortPokemon();
  }, [sortOrder]);

  return (
    <>
      <h1>Pokémon Compendium</h1>
      <Controls
        selectedType={selectedType}
        pokemonTypes={allTypes}
        filterChange={setSelectedType}
        sortOrder={sortOrder}
        sortChange={setSortOrder}
      />
      {loading && <Loader type="Puff" color="#00BFFF" height={80} width={80} />}
      {!loading && <PokemonList pokedex={pokemon} />}
    </>
  );
}
