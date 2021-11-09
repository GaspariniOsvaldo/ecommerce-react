import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    let stock = 120;

    const agregarAlCarrito = () => {
        if (counter) {
            localStorage.setItem('cantProd', counter)
            const container = document.getElementById('addToCartContainer')
            container.classList.add("opacityZero")
            
            setTimeout(() => {
                container.classList.add("displayNone")
                const linkCarrito = document.getElementById('linkToCarrito')
                linkCarrito.classList.remove("ToCarritoBase")
                linkCarrito.classList.add("ToCarritoAfter")
            }, 1000);
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
                            if (counter < stock) {
                                setCounter(counter + 1)
                            }
                        }} >+
                    </button>

                </div>
                <button onClick={agregarAlCarrito}>Add to cart</button>
            </section>
            <Link to="/cart" id="linkToCarrito" className="ToCarritoBase" >Ir al carrito</Link>
        </section>
    )
}