import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, price, seller, ratings, img} = props.product
    console.log(props)
    const handleAddtoCart = props.handleAddtoCart
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddtoCart(props.product)} className='addToCart'>AddToCart</button>
        </div>
    );
};

export default Product;