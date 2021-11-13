import { useCart } from "../../contexts/CartContext"


export const CartItem = ({ item }) => {

    return (
        <article className="CartItem">
            <img src={item.pictureUrl} alt={item.alt} />
            <h2> {item.title} </h2>
            <h3> ${item.price} </h3>
            <h3> Cantidad: {item.quantity}</h3>
        </article>
    )
}