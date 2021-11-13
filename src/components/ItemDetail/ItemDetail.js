
import { useCart } from "../../contexts/CartContext"
import { Counter } from "../Counter/Counter"


export const ItemDetail = ({ item }) => {

    const { addItem } = useCart();

    const onAdd = (quantityToAdd) => {
        item.stock -= quantityToAdd;
        item.quantity = quantityToAdd;
        addItem(item);
    }

    return (
        <article className="ItemDetail">
            <img src={item.pictureUrl} alt="Foto de producto" />
            <div>
                <h2>{item.title}</h2>
                <h2>Price: ${item.price}</h2>
                <p>{item.desc}</p>
                <Counter onAdd={onAdd} stockQuantity={item.stock} />
            </div>
        </article>
    )
}