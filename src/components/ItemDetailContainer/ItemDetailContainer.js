import { useEffect } from "react";
import { useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { Productos } from "../../media/productos";

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState(null);

    let {itemId} = useParams();

    itemId = Number.parseInt(itemId)

    const GetItem = () => {
        useEffect(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let info = Productos.find((x) => x.id === itemId)
                    resolve(info)
                }, 100)
            })
            .then(itemRecibido => {
                setItemDetail(itemRecibido);
                console.log(itemRecibido)
            })
        })
    }

    GetItem();

    return (
        <>
            {itemDetail ? (<section className="ItemDetailContainer">
                            <ItemDetail item={itemDetail} />
                        </section>)
                        : <h1>Loading ...</h1>}
        </>
    )
}