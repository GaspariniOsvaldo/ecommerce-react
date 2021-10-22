import { useState } from "react";
import { Item } from "../Item/Item";

export const ItemList = (productos) => {
    const [productitos, setProductos] = useState([productos])

    return (
        <>
            {productitos.map((productitos) => (
                <Item key={productitos.id} title={productitos.title} price={productitos.price} pictureUrl={productitos.pictureUrl}/>
            ))}
        </>
    )}