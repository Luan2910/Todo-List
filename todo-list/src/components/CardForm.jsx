import { useState} from 'react'

const CardForm = () => {

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!value || !category) return;
    setValue("");
    setCategory("");
  }

  return (
    <div className='CardForm'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Digite o título da tarefa' 
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)} name="" id="">
                <option value="">Seleciona uma categoria</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Trabalho">Trabalho</option>
            </select>
            <button type='submit'>Salvar tarefa</button>
        </form>
    </div>
  )
}

export default CardForm