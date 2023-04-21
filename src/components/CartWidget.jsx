import React from "react";
import cart from "../assets/cart.svg"

const CartWidget = () =>{
    return(
        <div>
            <button type="button" className="btn colorCartButton position-relative">
                <img src={cart} alt={"carrito"} width={20} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
            </button>
        </div>

    )
}

export default CartWidget