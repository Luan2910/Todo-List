import { useState } from 'react'
import Card from "./Card"

export default function Body() {

    const [cards, setCards] = useState([
        {
            id: 1,
            description: "Fazer compras",
            done: false,
        },
        {
            id: 2,
            description: "Limpar a casa",
            done: false,
        },
        {
            id: 3,
            description: "Academia",
            done: false,
        },
        {
            id: 4,
            description: "Passear com o cachorro",
            done: false,
        },
        {
            id: 5,
            description: "Cuidar das plantas",
            done: false,
        }
    ]);

    return (
        <div className="Body">
            {cards.map(cards => (
                <Card key={cards.id} description={cards.description}/>
            ))}
        </div>
    )
}