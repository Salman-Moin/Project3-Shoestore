import React from 'react';
import Shoes from './../Shoes.json';
import { Link } from 'react-router-dom';
import './../App.css'


function Product() {
  // console.log(Shoes)
  // console.log(Object.keys(Shoes))
    return (
    <div className="productContainer"> 
      <h2> Welcome to Product!! </h2>
      
      <div>
        {Object.keys(Shoes).map(keyName=>{
          const shoe = Shoes[keyName];
          return(
            <Link key={keyName} className="link"
            to={`/product/${keyName}`}>
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={150} />
            </Link>
          )
        })}
      </div>
    </div>
  );
}

export default Product;
