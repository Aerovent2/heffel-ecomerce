import React from 'react'
import Cart from '../components/Cart'
import EmptyCart from '../components/EmptyCart';
import { useContext } from 'react';
import { contexto } from '../context/CartContext';

export const CartContainer = () => {
    const {sumaCarrito} =useContext(contexto)

    return (sumaCarrito.cantidad  > 0 ? <Cart></Cart>: <EmptyCart></EmptyCart>
    )
}
