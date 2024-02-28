import { useState} from 'react'

const CardForm = ({addCard}) => {

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!description || !category) return;
    addCard(description, category);
    setDescription("");
    setCategory("");
  }

  return (
    <div className='CardForm'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Digite o título da tarefa' 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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