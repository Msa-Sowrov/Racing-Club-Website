import React from 'react';
import './Car.css'

const Car = (props) => {
    const {name, img, price, horsepower,model, stock} = props.car;
    return (
        <div>
            
  <div className="col">
    <div className="card" style={{
      height:"460px"
    }}>
      <img src={img} className="m-2" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p> <b>Power :</b> {horsepower}</p>
        <p> <b>Stock :</b> {stock} Unit available</p>
        <p> <b>Model :</b> {model}</p>
        <p> <b>Price :</b> {price} USD</p>
      </div>
      <button className="m-2 add-btn" onClick={()=>props.addToCart(props.car)} ><i className="fas fa-shopping-cart"></i>  add to cart</button>
    </div>
  </div>
</div>
        
    );
};

export default Car;