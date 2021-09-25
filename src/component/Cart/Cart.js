import React from 'react';

const Cart = (props) => {

  const {cart}= props;
  let price = 0
for(const pro of cart){
  price = price + pro.price;
}

    return (
        <div>
          <h4>product list: </h4>
          <p><b>Total Price:</b> ${price}</p>
          {
            cart.map(car => <li>{car.name}</li> )
          }
          <button>View Order</button>
        </div>
    );
};
export default Cart;