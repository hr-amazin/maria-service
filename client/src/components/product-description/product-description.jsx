import React from 'react';
import DescriptionItem from '../description-item/descriptionItem.jsx';
import styles from '../product-description/description.module.css';

const ProductDescription = ({id, productDescription = ''}) =>  {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {productDescription.split('\n').map((descriptioItem, index) => {
          return <DescriptionItem key={id + index} descriptionItem={descriptioItem}/>
         })}
      </ul>
    </div>
  ) 
}

export default ProductDescription;

