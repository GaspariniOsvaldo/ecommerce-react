import { useEffect } from "react";
import images from '../../media/images';
import { useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";

const Productos = [
    {id: 1, title: "XMax", price: 2000, pictureUrl: images.img1, desc: "Tremendos auris"},
    {id: 2, title: "SoundOP", price: 4500, pictureUrl: images.img2, desc: "Pero estos esan mejores"},
    {id: 3, title: "Ultra Sound", price: 6700, pictureUrl: images.img3, desc: "Na pero estos la rompen todavia mas"}
]

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState(null);

    const GetItem = () => {
        useEffect(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let info = Productos.find((x) => x.id === 1)
                    resolve(info)
                }, 3000)
            })
            .then(itemRecibido => {
                setItemDetail(itemRecibido);
                console.log(itemRecibido)
            })
        }, itemDetail)
    }

    GetItem();

    return (
        <section>
            <h2 className="h2Detail">Este es el ItemDetailContainer, en la siguiente entrega lo hago con useParams para que sea dinamico</h2>
            <section className="ItemDetailContainer">
                {itemDetail ? (<section className="ItemDetailContainer">
                                    <ItemDetail item={itemDetail} />
                                </section>)
                                : <h1>Loading ...</h1>}
            </section>
        </section>
    )
}