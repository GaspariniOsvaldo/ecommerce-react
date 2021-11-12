
import { Counter } from "../Counter/Counter"

export const ItemDetail = ({ item }) => {

    const addToCart = () => {
        
    }

    return (
        <article className="ItemDetail">
            <img src={item.pictureUrl} alt="Foto de producto" />
            <div>
                <h2>{item.title}</h2>
                <h2>Price: ${item.price}</h2>
                <p>{item.desc}</p>
                <Counter />
            </div>
        </article>
    )
}