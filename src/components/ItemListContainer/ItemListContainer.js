import { ItemList } from "../ItemList/ItemList";
import { useState } from "react";
import { Productos } from "../../media/productos";
import { useParams } from "react-router";
import { useEffect } from "react";

export const ItemListContainer = () => {

    const {categoryId} = useParams()

    const [products, setProducts] = useState(null);

    useEffect(() => {
        return new Promise((resolve, reject) => {
            setTimeout (() => {
                resolve(Productos);
            }, 500);
        })
        .then(catalogo => {
            if(categoryId){
                const categorySelect = Productos.filter((x) => x.cat === categoryId)
                setProducts(categorySelect);
                console.log("Entro el params: " + categorySelect)
            }
            else {
                setProducts(catalogo);
                console.log("entro sin param")
            }
        })
    }, [categoryId])

    return(
        <section className="ItemListContainer">
            <h2 className="ItemListContainer__title">Productos</h2>
            <ItemList productos={products}></ItemList>
        </section>
    );
}