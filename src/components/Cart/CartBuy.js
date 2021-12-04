import { useState } from "react";
import { useCart } from "../../contexts/CartContext"


export const CartBuy = () => {

    const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

    const { cart } = useCart();

    const getActualDate = () => {
        const today = new Date();
        const dd = today.getDate();
        const mm = today.getMonth() + 1;
        const yy = today.getFullYear();

        const actualDate = dd + "/" + mm + "/" + yy

        return (actualDate);
    }

    const getTotalPrice = () => {

        let total = 0;

        for (let i = 0; i < cart.length; i++) {
            total += (cart[i].price * cart[i].quantity);
        }

        return total;

    }



    const generateRandomCode = () => {
        var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
        var password = "";
        for (let i = 0; i < 20; i++) password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));

        return (password);
    }

    const confirmPurchase = () => {
        const inputName = document.getElementById("inputName").value;
        const inputPhone = document.getElementById("inputPhone").value;
        const inputEmail = document.getElementById("inputEmail").value;
        const actualDate = getActualDate();
        const total = getTotalPrice();
        const password = generateRandomCode();

        setPurchaseConfirmed({ buyerName: inputName, buyerPhone: inputPhone, buyerEmail: inputEmail, date: actualDate, total: total, buyCode: password });
    };

    return (
        <section className="cartBuy">
            {
                (purchaseConfirmed) ?
                    (
                        <article>
                            <h2>Purchase confirmed</h2>
                            <section>
                                <h3>Data: </h3>
                                <ul>
                                    <li>Name: {purchaseConfirmed.buyerName}</li>
                                    <li>Phone: {purchaseConfirmed.buyerPhone}</li>
                                    <li>Email: {purchaseConfirmed.buyerEmail}</li>
                                    <li>Date of purchase: {purchaseConfirmed.date} </li>
                                    <li>Total price: {purchaseConfirmed.total}</li>
                                    <li>Code of purchase: {purchaseConfirmed.buyCode}</li>
                                    <li></li>
                                </ul>
                            </section>
                        </article>
                    )
                    :
                    (
                        <section>
                            <h2>Enter your data</h2>
                            <article className="cartBuyForm">
                                <input id="inputName" type="text" placeholder="Ingrese su nombre"></input>
                                <input id="inputPhone" type="number" placeholder="Ingrese su celular"></input>
                                <input id="inputEmail" type="email" placeholder="Ingrese su email"></input>
                                <button onClick={confirmPurchase}>Finalizar compra</button>
                            </article>
                        </section>
                    )
            }
        </section>
    )
}