export default function Controls({ pokemonTypes, selectedType, filterChange }) {
  return (
    <>
      Filter Pokemon By Type:
      <select value={selectedType} onChange={(e) => filterChange(e.target.value)}>
        <option key="all" value="all">
          All Pokemon
        </option>
        {pokemonTypes.map(({ type }) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </>
  );
}
