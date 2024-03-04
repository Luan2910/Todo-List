import './Filter.css'

const Filter = ({filter, setFilter, setOrder}) => {
  return (
    <div className="Filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Done">Concluídas</option>
                    <option value="Pendent">Pendentes</option>
                </select>
            </div>
            <div>
                <p>Ordem:</p>
                <button value="Asc" onClick={() => setOrder("Asc")}>Crescente</button>
                <button value="Desc" onClick={() => setOrder("Desc")}>Decrescente</button>
            </div>
        </div>
    </div>
  )
}

export default Filter