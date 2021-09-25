import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [cars, setCar] = useState([]);
    const [cart, setCart] = useState([])
        useEffect(()=>{
            fetch('./products.json')
            .then(res=>res.json())
            .then(data=>setCar(data))
        },[])

        function addToCart(products){
            const newCart = [...cart, products]
            setCart(newCart)
        }

    return (
        <div className="container">
        <div className="row ">
            <div className="car col-md-10">
            <div className="row row-cols-3 row-cols-md-3 g-4">
            {
              cars.map(car => 
              <Car 
              addToCart={addToCart}
                car={car}
                key={car.key}
                /> )   
            }
            </div>
            </div>
            <div className="cart col-md-2">
                    <Cart cart={cart}/>    
            </div>
        </div>
        </div>
            
    );
};

export default Shop;        