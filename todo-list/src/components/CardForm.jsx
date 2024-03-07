import { useState} from 'react'
import { CATEGORY_LIST } from '../data/categories'; 

const CardForm = ({addCard}) => {

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const categories = CATEGORY_LIST;

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
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
            </select>
            <button type='submit'>Salvar tarefa</button>
        </form>
    </div>
  )
}

export default CardForm