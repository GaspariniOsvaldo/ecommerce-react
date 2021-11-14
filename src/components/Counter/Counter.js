import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export const Counter = ({ onAdd, stockQuantity }) => {
    const [counter, setCounter] = useState(0);

    const agregarAlCarrito = () => {
        if (counter > 0) {
            onAdd(counter);
        }
    }


    return (
        <section className="CounterContainer">
            <section id='addToCartContainer'>
                <div id='Counter'>
                    <button onClick={
                        () => {
                            if (counter > 0) {
                                setCounter(counter - 1)
                            }
                        }} >-
                    </button>

                    <input type="text" name="counter" value={counter} readOnly id="Counter" ></input>

                    <button onClick={
                        () => {
                            if (counter <= stockQuantity) {
                                setCounter(counter + 1)
                            }
                        }} >+
                    </button>

                </div>
                <button onClick={agregarAlCarrito}>Add to cart</button>
            </section>
        </section>
    )
}