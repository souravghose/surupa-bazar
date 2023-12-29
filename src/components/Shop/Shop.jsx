import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
        
    
       const [products, setProducts] = useState([]);

        useEffect(() => {
            fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        }, [])

        const [cart, setCart] = useState([]);
        const handleAddtoCart = (product) => {
            const newCart = [...cart, product]
            setCart(newCart)
        };
        
      
    return (
        <div className='shop-container'>
            <div className="product-container">
            {products.map(product => <Product product={product}
            key = {product.id}
            handleAddtoCart={handleAddtoCart}></Product>)}
            </div>
            <div className="order-container">
            <h2>Order Summary</h2>
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};
export default Shop;