import React from 'react';
import styles from '../product-price/price.module.css';

const Price = ({price}) =>  {
  let percentages = [8, 10, 15, 20];
  let randomIndex = Math.floor(Math.random() * percentages.length);
  let randomPercentage = percentages[randomIndex];
  let listPrice = Math.floor((price * 100) /( 100 - randomPercentage));
  listPrice = listPrice.toFixed(2);
  let save = Math.floor(listPrice - price);
  save = save.toFixed(2);

  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.category}>List price:</td>
            <td className={styles.listMoneyPrice}>${listPrice}</td>
          </tr>
          <tr>
            <td className={`${styles.price} ${styles.category}`}>Price:</td>
            <td>
              <span className={styles.moneyPrice}>${price}</span>
              <span>
                <i>
                  <span className={styles.iconImage}></span>
                  <span className={styles.primeRegard}>FREE One-day</span>
                </i>
              </span>
            </td>
          </tr>
          <tr>
            <td className={styles.category}>You save:</td>
            <td className={styles.savePrice}>${save} ({randomPercentage}%)</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) 
}

export default Price;
