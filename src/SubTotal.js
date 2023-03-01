import React from 'react'
import './SubTotal.css'

const SubTotal = () => {
  return (
    <div className='subtotal'>
    <p>
    Subtotal(0 items):<strong>$0</strong>
    </p>
    <small className='subtotal_gift'>
   <input type="checkbox"></input>
   This order contains a gift card
    </small>
    <button>Proceed to checkout</button>
      
    </div>
  )
}

export default SubTotal
