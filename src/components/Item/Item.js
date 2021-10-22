

export const Item = ({title, price, pictureUrl}) => {
    return (
        <article className="Item">
            <img src={pictureUrl} alt="Auriculares"/>
            <section>
                <h3>{title}</h3>
                <h3>${price}</h3>
                <a>Shop <box-icon color="#FF8243" name='chevron-right'></box-icon></a>
            </section>
        </article>
    )
}