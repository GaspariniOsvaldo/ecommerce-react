import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext"
import { CartItem } from "./CartItem";

const EmptyCart = () => {
    return (
        <section>
            <h2>Carrito vacio</h2>
            <Link to="/"> Go home </Link>
        </section>
    )
}

export const CartListContainer = () => {

    const { cart } = useCart();

    return (

        <section className="CartListContainer">
            {
                (cart[0] !== undefined) ?
                    cart.map((producto) => (
                        <CartItem key={producto.id} item={producto} />
                    ))
                    :
                    (<EmptyCart/>)
            }
        </section>
    )
}