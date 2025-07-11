import React from 'react';
import '../styles/cards.css';

export default function Cards(props) {
    return (
        <div className='cards'style={{ backgroundColor: props.color }}>
            <p>{props.head}</p>
            <h1>{props.value}</h1>
        </div>
    )
}