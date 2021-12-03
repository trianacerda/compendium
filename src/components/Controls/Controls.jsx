export default function Controls({ pokemonTypes, selectedType, handleChange }) {
  return (
    <>
      Filter Pokemon By Type:
      <select value={selectedType} onChange={(e) => handleChange(e.target.value)}>
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
