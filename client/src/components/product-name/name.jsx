import React from 'react';
import styles from '../product-name/name.module.css'
import StarRatings from '../../../../node_modules/react-star-ratings'

const Name = ({name = '', rating}) =>  {
  let nameLink = name.split(' ');
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>{name}</div> 
      <div>
        <p className={styles.provider}> by
          <a className={styles.nameLink} href="#">
            {nameLink[0]}
          </a>       
        </p>
      </div>  
      <div> <StarRatings 
      className={styles.ratings}
      rating = {Math.random() * (5 - 1 + 1) + 1}
      starRatedColor="#ffce00"
      starSpacing=".2px"
      starDimension="15px"
      numberOfStars={5}
      name='rating'
      /> <a className={styles.reviews} href="#">{Math.floor(Math.random() * (200 - 10 + 1) + 10)} customer reviews</a>
      </div>   
    </div>
  ) 
}

export default Name;
