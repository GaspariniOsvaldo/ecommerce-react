import { useContext, useState } from "react";
import { createContext } from "react";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider =  ({children}) => {

    const [cart, setCart] = useState([]);

    const existsInCart = (item) => {
        const result = cart.findIndex(producto => producto.id === item.id)
        
        cart && cart.map((producto) => (
            console.log("El cart tiene: " + producto.id + " y el item buscado es: " + item.id)
        ))

        console.log("El findIndex al buscarlo da: " + result);
        return (result);
    }

    const addItem = (item) => {

        const indexItem = existsInCart(item);

        if (indexItem >= 0) {
            return
        }
        else {
            setCart([...cart, item]);
        }
        
    }

    const removeItem = (item) => {

        const indexItem = existsInCart(item);

        if (indexItem >= 0) {
            const cartProv = cart.filter(x => x.id !== item.id);

            console.log("El cart prov da: " + cartProv)

            setCart(cartProv);
        }
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}