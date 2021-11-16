import 'boxicons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export const CartWidget = () => {

    const { cart } = useCart();

    const [total, setTotal] = useState();

    useEffect(() => {
        if (cart[0] !== undefined) {
            let accumulator = 0;

            for (let i = 0; i < cart.length; i++) {
                accumulator += cart[i].quantity;
            }

            setTotal(accumulator);
        }
    }, [cart]);

    return (
        <article className="cartWidget">
            <Link to="/cart">
                <box-icon color="white" size="2rem" name='cart' ></box-icon>
                <div className="bloonCart">{total}</div>
            </Link>
        </article>
    )
}