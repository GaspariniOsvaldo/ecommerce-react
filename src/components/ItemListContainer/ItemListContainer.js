import { ItemList } from "../ItemList/ItemList";
import { useState } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import { collection, getDocs, getFirestore } from "@firebase/firestore";

export const ItemListContainer = () => {

    const { categoryId } = useParams()

    const [products, setProducts] = useState(null);

    useEffect(() => {

        const db = getFirestore();

        getDocs(collection(db, "items"))

            .then(snapshot => {
                const dbProducts = snapshot.docs.map((doc) => doc.data());

                if (categoryId) {
                    const categorySelect = dbProducts.filter(item => item.cat === categoryId);
                    setProducts(categorySelect);
                }
                else {
                    setProducts(dbProducts);
                }
            })
    }, [categoryId])

    return (
        <section className="ItemListContainer">
            <h2 className="ItemListContainer__title">Products</h2>
            <ItemList productos={products}></ItemList>
        </section>
    );
}