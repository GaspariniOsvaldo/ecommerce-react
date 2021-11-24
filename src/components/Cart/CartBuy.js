import { useCart } from "../../contexts/CartContext"


export const CartBuy = () => {

    const { cart } = useCart();

    const getActualDate = () => {
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth() + 1;
        const yy = today.getFullYear();

        const actualDate = dd + "/" + mm + "/" + yy

        return ( actualDate );
    }

    const getTotalPrice = () => {

        let total = 0;

        for(let i = 0; i < cart.length; i++) {
            total += (cart[i].price * cart[i].quantity);
        }

        return total;

    }

    const confirmPurchase = () => {
        const inputName = document.getElementById("inputName").value;
        const inputPhone = document.getElementById("inputPhone").value;
        const inputEmail = document.getElementById("inputEmail").value;

        const actualDate = getActualDate();

        const total = getTotalPrice();

        const purchaseData = {
            "buyer" : {
                "nameBuyer": inputName,
                "phone": inputPhone,
                "email": inputEmail
            },
            "items" : cart,
            "date" : actualDate,
            "total" : total
        };

        console.log("Datos del comprador: " + purchaseData.buyer.nameBuyer);
        console.log("Items comprados: ");
        for(let i = 0; i < cart.length; i++) {
            console.log("-- " + cart[i].title);
        }
        console.log("Fecha de compra: " + purchaseData.date);
        console.log("Precio final de la compra completa: " + purchaseData.total);
        
    };

    return (
        <section>
            <input id="inputName" type="text" placeholder="Ingrese su nombre"></input>
            <input id="inputPhone" type="number" placeholder="Ingrese su celular"></input>
            <input id="inputEmail" type="email" placeholder="Ingrese su email"></input>
            <button onClick={confirmPurchase}>Finalizar compra</button>
        </section>
    )
}