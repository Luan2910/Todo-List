import { useState } from 'react'
import Card from "./Card"
import CardForm from './CardForm';
import Search from './Search';
import './Body.css'
import Filter from './Filter';

const cardList = [
    {
        id: 1,
        description: "Fazer compras",
        category: "Pessoal",
        done: false,
    },
    {
        id: 2,
        description: "Limpar a casa",
        category: "Pessoal",
        done: false,
    },
    {
        id: 3,
        description: "Academia",
        category: "Trabalho",
        done: false,
    },
    {
        id: 4,
        description: "Passear com o cachorro",
        category: "Trabalho",
        done: false,
    },
    {
        id: 5,
        description: "Cuidar das plantas",
        category: "Trabalho",
        done: false,
    }
]

export default function Body() {

    const [cards, setCards] = useState(cardList);

    const addCard = (description,category) => {
        const newCards = [...cards, 
            {
            id: Math.floor(Math.random() * 100),
            description,
            category,
            done: false,
            },
        ];
        setCards(newCards);
    };

    const removeCard = (id) => {
        const newCards = [...cards];
        const filteredCards = newCards.filter((card) => card.id !== id ? card : null);
        setCards(filteredCards);
    }

    const completeCard = (id) => {
        const newCards = [...cards];
        newCards.map((card) => card.id === id ? card.done = !card.done : card)
        setCards(newCards);
    }

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("All");
    const [order, setOrder] = useState("Asc");

    return (
        <div className="Body container">
            <Filter filter={filter} setFilter={setFilter} setOrder={setOrder}/>
            <Search search={search} setSearch={setSearch}/>
            <div className="card-list">
                {cards
                .filter((card) => filter === "All" ? true : filter === "Done" ? card.done : !card.done) //Filter by Card done
                .filter((card) => card.description.toLowerCase().includes(search.toLowerCase())) //Search by Card description
                .sort((a,b) => order === "Asc" ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description))//Order (Asc/Desc)
                .map(cards => (
                    <Card key={cards.id} cards={cards} removeCard={removeCard} completeCard={completeCard}/>
                ))} 
            </div>
            <CardForm addCard={addCard}/>
        </div>
    )
}