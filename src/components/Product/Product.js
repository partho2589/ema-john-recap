import React from 'react';
import './Product.css'
const Product = (props) => {
   console.log(props)
   const {name, price,seller,ratings, img} =props.product
    return (
        <div className='product-container'>
           
                <div class="col">
                    <div  class="card h-100 ">
                        <img id='product-img' src={img} alt="" />
                        <div class="card-body">
                            <p className='product-name'> {name}</p>
                            <p>Price: ${price}</p>
                            <p><small>Manufacture: {seller}</small></p>
                            <p><small>Rating: {ratings}</small></p>
                       </div>
                    </div>
                </div>
  
            </div>
        
    );
};

export default Product;