import React from 'react';
import Name from '../product-name/name.jsx';
import Delivery from '../delivery/delivery.jsx';
import Price from '../product-price/price.jsx';

const GeneralInfo = ({productInfo}) =>  {  
  return (   
    <div>
      <Name name={productInfo.name}/>
      <Price price={productInfo.price}/>
      <Delivery delivery={productInfo.deliver_estimation} seller={productInfo.seller_name}/>
    </div>
  ) 
}

export default GeneralInfo;

