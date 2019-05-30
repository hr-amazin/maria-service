import React from 'react';
import styles from '../description-item/descriptionItem.module.css';

const DescriptionItem = ({descriptionItem}) =>  {
  console.log('this is description', descriptionItem);
  return (
    <>
      <li>
        <span className={styles.item}>{descriptionItem}</span>
      </li>        
    </>
  ) 
}

export default DescriptionItem;
