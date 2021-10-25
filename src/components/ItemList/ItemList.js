import { useState } from "react";
import { Item } from "../Item/Item";

export const ItemList = ({productos}) => {

    return (
        <section className="ItemList">
            {productos ? productos.map((productitos) => (
                <Item key={productitos.id} title={productitos.title} price={productitos.price} pictureUrl={productitos.pictureUrl}/>
            )) : (<h1>Loading...</h1>)}
        </section>
    )}