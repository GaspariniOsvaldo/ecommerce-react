import { useEffect } from "react";
import { useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase/index";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState(null);

    let { itemId } = useParams();
    
    useEffect(() => {
        const db = getFirestore();

        const itemReference = doc(db, "items", itemId);
        getDoc(itemReference).then((snapshot) => {
            if(snapshot.exists()) {
                setItemDetail(snapshot.data())
            }
        })

    }, [])

    return (
        <>
            {itemDetail ? (<section className="ItemDetailContainer">
                            <ItemDetail item={itemDetail} />
                        </section>)
                        : (<h1>Loading ...</h1>)}
        </>
    )
}