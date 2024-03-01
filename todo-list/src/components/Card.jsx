import { useState } from 'react';
import './Card.css'

const Card = ({cards, removeCard, completeCard}) => {

    return (
        <div className="Card" >
            <div className='content' style={{textDecoration: cards.done ? "line-through" : ""}}>
                <div className="description">
                    {cards.description}
                </div>
                <div className="category">
                    {cards.category}
                </div>
            </div>
            <div className='buttons'>
                <button className='remove' onClick={() => removeCard(cards.id)}>x</button>
                <button className='complete' onClick={() => completeCard(cards.id)}>complete</button>
            </div>
        </div>
    );
} 

export default Card