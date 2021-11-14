import { useCart } from "../../contexts/CartContext";


export const CartItem = ({ item }) => {

    const { removeItem } = useCart();
    
    const remove = () => {
        removeItem(item);
    }

    return (
        <article className="CartItem">

            <img src={item.pictureUrl} alt={item.alt} />
            <h2> {item.title} </h2>
            <h3> ${item.price} </h3>
            <h3> Amount: {item.quantity}</h3>

            <button onClick={remove} >Remove item</button>

        </article>
    )
}