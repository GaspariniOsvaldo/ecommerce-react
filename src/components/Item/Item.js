import { Link } from "react-router-dom"


export const Item = ({id, title, price, pictureUrl}) => {

    return (
        <article className="Item">
            <img className="imgItem" src={pictureUrl} alt="Auriculares"/>
            <section>
                <h3>{title}</h3>
                <h3>${price}</h3>
                <Link to={`/item/${id}`}>Shop <box-icon color="#FF8243" name='chevron-right'></box-icon></Link>
            </section>
        </article>
    )
}