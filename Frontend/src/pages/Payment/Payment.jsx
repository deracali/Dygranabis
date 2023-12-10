import React, { useContext } from 'react'
import './payment.css'
import { Store } from '../../../Store/Store'

export default function Payment() {
  const {state,dispatch:ctxDispatch} = useContext(Store)
  const {
      cart: {cartItems},
      userInfo
  } = state
   
  console.log(cartItems)
  return (
    <div className="credit-card-form">
    <h2>PAYMENT PORTAL</h2>
<img className="Image1" src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png" alt="6375aad33dbabc9c424b5713-card-mockup-01" border="0"/>
  
    <form>
      <div className="form-group">
        <label for="card-number">Card Number</label>
        <input type="text" id="card-number" placeholder="Card number"/>
      </div>
      <div className="form-group">
        <label for="card-holder">Card Holder</label>
        <input type="text" id="card-holder" placeholder="Card holder's name"/>
      </div>
      <div className="form-row">
        <div className="form-group form-column">
          <label for="expiry-date">Expiry Date</label>
          <input type="text" id="expiry-date" placeholder="MM/YY"/>
        </div>
        <div className="form-group form-column">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" placeholder="CVV"/>
        </div>
      </div>
      <button type="submit" className="click-button" onclick="showLoading(event, this)">PAY NOW - $({cartItems.reduce((a,c)=>a + c.quantity, 0)}{' '}
                 items : $ 
                {cartItems.reduce((a,c)=> a + c.price * c.quantity, 0)})</button>
    </form>
  </div>
  )
}
