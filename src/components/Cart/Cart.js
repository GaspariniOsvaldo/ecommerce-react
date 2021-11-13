import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext"
import { CartListContainer } from "./CartListContainer";


export const Cart = () => {

    const { cart } = useCart();

    console.log("El cart tiene: " + cart);

    return (
        <section className="CartSection">
            <section className="CartListSection">
                <CartListContainer></CartListContainer>
            </section>

            <Link to="/" >Seguir comprando</Link>
        </section>
    )
}