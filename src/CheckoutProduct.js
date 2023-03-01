import React from 'react'
import './CheckoutProduct.css'

const CheckoutProduct = () => {
  return (
    
    <div className='checkoutProduct'>
    <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/mobile/1/r/n/-original-imagmg6gyzgzzszt.jpeg?q=70" alt="" className="checkout_img" />
    
    <div className="product_info">
    <p className="checkoutProduct_title">
    Samsung Galaxy S23 (Cream,256 GB)
    </p>
    <div className="checkout_price">
    <small>$</small>
    <strong>20</strong>
    </div>
    <div className="checkout_rating">
    ⭐⭐⭐⭐
    </div>
    <button>Remove from basket</button>

    
    </div>
    </div>
   
      
    
  )
}

export default CheckoutProduct

