import React from 'react';
import './Cart.css'
const Cart = (props) => {

  const {cart}= props;
  let price = 0
for(const pro of cart){
  price = price + pro.price;
}

    return (
        <div className="cart">
          <h4>Car Added:{cart.length} </h4>
          <h5>Total Price: ${price}</h5>
          {
            cart.map(car => <li>{car.name}</li> )
          }
          <button className="cart-btn">View Order</button>
        </div>
    );
};
export default Cart;