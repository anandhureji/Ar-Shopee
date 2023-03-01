import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import SubTotal from './SubTotal'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='checkout'>
    <div className="checkout_left">
    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt="" className="checkout_add">
    </img>
    <div>
    <h2 className="checkout_title">Your Shopping Basket</h2>
    <CheckoutProduct />
    <CheckoutProduct />
    </div>
    </div>
    <div className="checkout_right">
    <SubTotal />
    </div>    
    </div>
  )
}

export default Checkout
