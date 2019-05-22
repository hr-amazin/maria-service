import React from 'react';
import DescriptionItem from './descriptionItem.jsx';

const ProductDescription = ({id, productDescription = ''}) =>  {
  return (
    <>
      <ul>
        {productDescription.split('\n').map((descriptioItem, index) => {
          return <DescriptionItem key={id + index} descriptionItem={descriptioItem}/>
         })}
      </ul>
    </>
  ) 
}

export default ProductDescription;

