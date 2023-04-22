import React from "react";
import { useState, useContext, createContext } from "react";

const CartContext= createContext('')
export const useCartContext=()=> useContext(CartContext);

function CartProvider({children}) {
    
    const [cart, setCart] = useState([]);

    const totalPrice = ()=> {
        return cart.reduce((prev,act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () =>setCart([]);

    const isInCart=(id) => cart.find(product => product.id===id)? true: false;

    const removeProduct=(id) => setCart(cart.filter(product=> product.id !== id));

    const getItemQuantity = () => {
        return cart.reduce((acumulador,producto) => acumulador += producto.quantity, 0);
    }

    const addProduct = (item,quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product.quantity} : product
            }));
        } else{
            setCart([...cart, {...item, quantity}]);
        }
    }


    return(
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            getItemQuantity,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider