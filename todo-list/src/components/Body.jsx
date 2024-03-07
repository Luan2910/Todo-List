import { useState } from 'react'
import Card from "./Card"
import CardForm from './CardForm';
import Search from './Search';
import './Body.css'
import Filter from './Filter';
import { CARD_LIST } from '../data/cards';
 
const cardList = CARD_LIST;

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

    function searchCards (cards, search) {
        const newCards = cards.filter((card) => card.description.toLowerCase().includes(search.toLowerCase())); 
        return newCards;
    }
    function filterCards (cards, type, filter) {
        var newCards;
        if(type === 'order'){
            newCards = cards.sort((a,b) => filter === "Asc" ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description))//Order (Asc/Desc)
        }else if(type === 'complete'){
            newCards = cards.filter((card) => filter === "All" ? true : filter === "Done" ? card.done : !card.done) //Filter by Card done
        }else {
            newCards = cards;
        }
        return newCards;
    }

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("All");
    const [order, setOrder] = useState("Asc");

    return (
        <div className="Body container">
            <Filter filter={filter} setFilter={setFilter} setOrder={setOrder}/>
            <Search search={search} setSearch={setSearch}/>
            <div className="card-list">
                {filterCards(filterCards(searchCards(cards, search), 'order', order), 'complete', filter)
                .map(cards => (
                    <Card key={cards.id} cards={cards} removeCard={removeCard} completeCard={completeCard}/>
                ))} 
            </div>
            <CardForm addCard={addCard}/>
        </div>
    )
}