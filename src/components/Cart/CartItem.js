import { useCart } from "../../contexts/CartContext";


export const CartItem = ({ item }) => {

    const { removeItem } = useCart();

    return (
        <article className="CartItem">
            <img src={item.pictureUrl} alt={item.alt} />
            <h2> {item.title} </h2>
            <h3> ${item.price} </h3>
            <h3> Amount: {item.quantity}</h3>

            {/* <button onClick={removeItem(item)} >Remove item</button> */}
            {/* Este boton me rompe /cart */}

        </article>
    )
}