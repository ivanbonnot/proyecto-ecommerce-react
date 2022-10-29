import React, { useContext } from "react";
import '../CartWidget/CartWidget.css'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";



function Cart() {

    const { cantidadCompra } = useContext(CartContext);

    return (
        <>
            <div className="container">
                <Link to={'/cart'}>
                    <img className="carrito" src="/img/carrito.png" alt="cart" />
                </Link>
                {cantidadCompra >= 1 ? <span className="cantidadCompra">{cantidadCompra}</span> : null}
                
            </div>

        </>
    )
}

export default Cart;