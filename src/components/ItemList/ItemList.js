import { Item } from "../Item/Item";

export const ItemList = ({productos}) => {

    return (
        <section className="ItemList">
            {productos ? productos.map((producto) => (
                <Item key={producto.id} id={producto.id} title={producto.title} price={producto.price} pictureUrl={producto.pictureUrl}/>
            )) : (<h1>Loading...</h1>)}
        </section>
    )}