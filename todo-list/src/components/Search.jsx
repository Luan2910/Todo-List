const Search = ({search, setSearch}) => {
  return (
    <div className="Search">
        <h2>Buscar:</h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite para pesquisar:" />
    </div>
  )
}

export default Search