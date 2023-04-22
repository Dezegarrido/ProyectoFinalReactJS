import React from "react";
import cart from "../assets/cart.svg"
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";

const CartWidget = () =>{

    const {getItemQuantity} = useCartContext();

    return(
            <button className="btn btn-primary cartWidget">
                <Link to={'/cart'} className="nav-link">
                    <i className="fas fa-shopping-cart fa-lg"></i>
                    {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                </Link>
            </button>

    )
}

export default CartWidget