import { useState } from 'react';
import './Card.css'

const Card = ({id, description}) => {

    return (
        <div className="Card">
            <div className="content">
                {description}
            </div>
            <div>
                <button className='complete'>Completed</button>
                <button className='remove'>X</button>
            </div>
        </div>
    );
} 

export default Card