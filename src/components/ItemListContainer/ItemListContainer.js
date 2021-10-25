import { ItemList } from "../ItemList/ItemList";
import images from '../../media/images';
import { useState } from "react";

export const ItemListContainer = () => {
    const Productos = [
        {id: 1, title: "XMax", price: 2000, pictureUrl: images.img1},
        {id: 2, title: "SoundOP", price: 4500, pictureUrl: images.img2},
        {id: 3, title: "Ultra Sound", price: 6700, pictureUrl: images.img3}
    ]

    const [products, setProducts] = useState(null);

    const getDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout (() => {
                resolve(Productos);
            }, 2000);
        });
    }

    getDatos().then((catalogo) => {
        setProducts(catalogo);
    })

    return(
        <section className="ItemListContainer">
            <ItemList productos={products}></ItemList>
        </section>
    );
}