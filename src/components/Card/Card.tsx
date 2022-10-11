import * as React from 'react';
import "./Card.scss"
interface CardProp {
    title: string, count: number
}
const Card = ({ title, count }: CardProp) => {
    return (
        <div className='card'>
            <p>{title}</p>
            <span>{count}</span>
        </div>
    );
}

export default Card;