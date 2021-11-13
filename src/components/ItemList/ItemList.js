import { Item } from "../Item/Item";

export const ItemList = ({productos}) => {

    return (
        <section className="ItemList">
            {productos ? productos.map((producto) => (
                <Item key={producto.id} item={producto} />
            )) : (<h1>Loading...</h1>)}
        </section>
    )}