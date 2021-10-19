import React, {Component, useState } from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState('1');

    return (
        <article className="counter">
            <button onClick={ 
                () => {
                    if (counter > 0) {
                        setCounter(counter - 1)
                    }}} >-</button>
            <input readOnly>counter</input>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </article>
    )
}