import { useEffect } from "react";
import { useCart } from "../../contexts/CartContext"
import { CartItem } from "./CartItem";

export const CartListContainer = () => {

    const { cart } = useCart();

    return (

        <section className="CartListContainer">
            {
                (cart[0] !== undefined) ?
                    cart.map((producto) => (
                        <CartItem item={producto} key={producto.id}/>
                    ))
                    :
                    (<h2>Carrito vacio</h2>)
            }
        </section>
    )
}