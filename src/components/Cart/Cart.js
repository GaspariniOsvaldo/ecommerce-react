import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext"
import { CartListContainer } from "./CartListContainer";


export const Cart = () => {

    const { cart } = useCart();
    const { clearCart } = useCart();

    const clear = () => {
        clearCart();
    }

    return (
        <section className="CartSection">
            <section className="CartListSection">
                <CartListContainer></CartListContainer>
                {
                    (cart[0] !== undefined) && (<button onClick={ clear }>Clear cart</button>)
                }
                <Link to="/cart/finish">Finalizar compra</Link>
            </section>
        </section>
    )
}