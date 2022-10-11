import * as React from 'react';
import Card from '../Card/Card';
import "./Cards.scss"
interface IRepo {
    title: string, count: number
}
const Cards = () => {
    const cardsConfig: Array<IRepo> = [
        { title: "Unresolved", count: 60 },
        { title: "Overdue", count: 16 },
        { title: "Open", count: 43 },
        { title: "On hold", count: 64 },
    ]
    return (
        <div className='cards'>{cardsConfig.map((card) => <Card key={card.title && card.count} title={card.title} count={card.count} />)} </div>
    );
}

export default Cards;