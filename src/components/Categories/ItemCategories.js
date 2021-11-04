import { Link } from "react-router-dom"

export const ItemCategories = ({title, pictureUrl}) => {

    return(
        <article>
            <img alt="Foto de categoria" src={pictureUrl} />
            <h2>{title}</h2>
            <Link to={`/category/${title}`} className="btnVisitar">Shop <box-icon color="#FF8243" name='chevron-right'></box-icon></Link>
        </article>
    )
}