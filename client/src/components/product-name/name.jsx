import React from 'react';
import styles from '../product-name/name.module.css'

const Name = ({name = ''}) =>  {
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
    </div>
  ) 
}

export default Name;
