import React from 'react';
import Name from './name.jsx';
import Seller from './seller.jsx';
import Delivery from './delivery.jsx';
import Price from './price.jsx';

const GeneralInfo = ({productInfo}) =>  {  
  return (   
    <>
      <Name name={productInfo.name}/>
      <Price price={productInfo.price}/>
      <Delivery delivery={productInfo.deliver_estimation}/>
      <Seller seller={productInfo.seller_name}/>
    </>
  ) 
}

export default GeneralInfo;

