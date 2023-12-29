import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total = 0;
    for (const product of cart){
        total = total + product.price;
    }
    const tax = total * 7/100;
    const grandTotal = total + tax;
    return (
        <div className='cart'>
            <p>Seleceted items: {cart.length}</p>
            <p>Price: ${total.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};
export default Cart;