import { useContext, useState } from "react";
import { createContext } from "react";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const existsInCart = (item) => {
        const result = cart.findIndex(producto => producto.id === item.id)

        return (result);
    }

    const addItem = (item) => {

        const indexItem = existsInCart(item);

        if (indexItem >= 0) {
            const cartProv = cart;

            cartProv[indexItem].quantity = item.quantity;
            cartProv[indexItem].stock = item.stock;
            setCart(cartProv);

        }
        else {
            setCart([...cart, item]);
        }

    }

    const removeItem = (item) => {

        const indexItem = existsInCart(item);

        if (indexItem >= 0) {
            const cartProv = cart.filter(x => x.id !== item.id);

            console.log("El cart prov del removeitem da: " + cartProv)

            setCart(cartProv);
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}