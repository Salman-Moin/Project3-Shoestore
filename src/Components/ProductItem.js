import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../Shoes.json';


function ProductItem() {
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe)
    return <h2> Product Not Found!</h2>
 
  return (
    <div>
      Welcome to Product Item!!
      <div className="link">  
            
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={500} />
      </div>
    </div>
  );
}

export default ProductItem;
