
export const ItemDetail = ({item}) => {

    return (
        <article className="ItemDetail">
            <img src={item.pictureUrl} alt="Foto de producto" />
            <div>
                <h2>{item.title}</h2>
                <h2>Precio: ${item.price}</h2>
                <p>{item.desc}</p>
            </div>
        </article>
    )
}