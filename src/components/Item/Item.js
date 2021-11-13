import { Link } from "react-router-dom"


export const Item = ({item}) => {

    return (
        <article className="Item">
            <img className="imgItem" src={item.pictureUrl} alt="Auriculares"/>
            <section>
                <h3>{item.title}</h3>
                <h3>${item.price}</h3>
                <Link to={`/item/${item.id}`}>Shop <box-icon color="#FF8243" name='chevron-right'></box-icon></Link>
            </section>
        </article>
    )
}