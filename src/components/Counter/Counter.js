import React, { useState } from 'react';

export const Counter = ({ onAdd, stockQuantity }) => {
    const [counter, setCounter] = useState(0);

    const agregarAlCarrito = () => {
        if (counter > 0) {
            onAdd(counter);
        }
    }

    /* Funciones del counter */
    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    const increment = () => {
        if (counter < stockQuantity) {
            setCounter(counter + 1)
        }
    }

    return (
        <section className="CounterContainer">
            <section id='addToCartContainer'>
                <div id='Counter'>

                    <button onClick={ decrement } >-</button>

                    <input type="text" name="counter" value={counter} readOnly id="Counter" ></input>

                    <button onClick={ increment } >+</button>

                </div>
                <button className="btnAddToCart" onClick={agregarAlCarrito}>Add to cart</button>
            </section>
        </section>
    )
}