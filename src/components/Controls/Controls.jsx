export default function Controls({
  pokemonTypes,
  selectedType,
  filterChange,
  sortOrder,
  sortChange,
}) {
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
      Sort Order Of Pokemon:
      <select value={sortOrder} onChange={(e) => sortChange(e.target.value)}>
        <option key="asc" value="asc">
          Ascending
        </option>
        <option key="desc" value="desc">
          Descending
        </option>
      </select>
    </>
  );
}
