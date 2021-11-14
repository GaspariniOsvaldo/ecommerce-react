
import { useState } from "react";
import { useCart } from "../../contexts/CartContext"
import { Counter } from "../Counter/Counter"
import { Link } from "react-router-dom";


export const ItemDetail = ({ item }) => {

    const { addItem } = useCart();

    const onAdd = (quantityToAdd) => {
        added();
        item.stock -= quantityToAdd;
        item.quantity = quantityToAdd;
        addItem(item);
    }

    const [ addedBoolean, setAddedBoolean ] = useState(false);

    const added = () => {
        setAddedBoolean(true);
    }

    return (
        <article className="ItemDetail">
            <img src={item.pictureUrl} alt="Foto de producto" />
            <div>
                <h2>{item.title}</h2>
                <h2>Price: ${item.price}</h2>
                <p>{item.desc}</p>
                { addedBoolean ? (<Link to="/cart" id="linkToCarrito" className="ToCarritoBase" >Ir al carrito</Link>) :  (<Counter onAdd={onAdd} stockQuantity={item.stock} />)}
            </div>
        </article>
    )
}