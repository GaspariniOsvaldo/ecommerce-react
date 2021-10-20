import React, {Component, useState } from 'react';

export const Counter = () => {
    const [counter, setCounter] = useState(1);
    let stock = 12;

    return (
        <div className="counterClass">
            <button onClick={ 
                () => {
                    if (counter > 0) {
                        setCounter(counter - 1)
                    }}} >-</button>
            <p>{counter}</p>
            <button onClick={() => {
                if (counter < stock) {
                    setCounter(counter + 1)
                }
            }}>+</button>
        </div>
    )
}