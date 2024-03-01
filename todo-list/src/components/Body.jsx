import { useState } from 'react'
import Card from "./Card"
import CardForm from './CardForm';
import './Body.css'

export default function Body() {

    const [cards, setCards] = useState([
        {
            id: 1,
            description: "Fazer compras",
            category: "Trabalho",
            done: false,
        },
        {
            id: 2,
            description: "Limpar a casa",
            category: "Trabalho",
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
    ]);

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

    return (
        <div className="Body container">
            <div className="card-list">
                {cards.map(cards => (
                    <Card key={cards.id} cards={cards} removeCard={removeCard} completeCard={completeCard}/>
                ))} 
            </div>
            <CardForm addCard={addCard}/>
        </div>
    )
}