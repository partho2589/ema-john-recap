import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProduct(data))
    },[])
    return (
        <div className='shop-container'>
            <div id='products-container' class="row row-cols-1 row-cols-md-3 g-4">
             {
                 product.map(product=><Product
                 key={product.id}
                 product={product}
                 ></Product>)
             }
            </div>
            <div className='cart-container'> 
                <h4>Order summary  </h4>
            </div>
        </div>
    );
};

export default Shop;