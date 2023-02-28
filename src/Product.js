import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <div className="product">
    <div className="product_info">
    <p>abcdef</p>
    <p className="product_price">
   <small>$</small>
   <strong>30</strong>
    </p>
    <div className="product_rating">***</div>
    </div>
    <img src="https://www.91-cdn.com/hub/wp-content/uploads/2022/12/Samsung-Galaxy-S23-ultra-1.jpg" />
    <button>Add to basket</button>
    </div>
  )
}

export default Product
