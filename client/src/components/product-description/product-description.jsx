import React from 'react';
import DescriptionItem from '../description-item/descriptionItem.jsx';
import styles from '../product-description/description.module.css';

const ProductDescription = ({id, productDescription = ''}) =>  {
  
  productDescription= productDescription.replace('\n\n','\n');
  
  // let description = productDescription.split('\n');
  // // let descriptionDoubleSpace = productDescription.split('\n\n');
  // console.log('checking', productDescription)
  // console.log('length', description.length);
  // if (description.length === 1) {
  //   console.log('raw',  productDescription);
  //   description = productDescription.split('\n\n');
  //   console.log(true);
  // }

  // console.log('with one space',productDescription.split('\n'))
  // console.log('with double space', productDescription.split('\n\n'))

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {productDescription.split('\n').map((descriptionItem, index) => {
          return <DescriptionItem key={id + index} descriptionItem={descriptionItem}/>
         })}
      </ul>
    </div>
  ) 
}

export default ProductDescription;

