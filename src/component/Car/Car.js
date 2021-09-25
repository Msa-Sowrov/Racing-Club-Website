import React from 'react';
import './Car.css'

const Car = (props) => {
    const {name, img, price, horsepower, stock} = props.car;
    return (
        <div>
            
  <div className="col">
    <div className="card" style={{
      height:"450px"
    }}>
      <img src={img} className="m-2" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p> <b>Price :</b> {price} USD</p>
        <p> <b>Stock :</b> {stock}</p>
        <p> <b>Power :</b> {horsepower}</p>
      </div>
      <button className="btn m-2 add-btn" onClick={()=>props.addToCart(props.car)} ><i class="fas fa-shopping-cart"></i>  add to cart</button>
    </div>
  </div>
</div>
        
    );
};

export default Car;