import React from 'react';
import styles from '../product-price/price.module.css';

const Price = ({price = ''}) =>  {
  let priceAsNumber = price;
  console.log(price);

  if (typeof price === 'string') {
     priceAsNumber = parseFloat(price.replace(',', ''));
  }
  
  let percentages = [8, 10, 15, 20];
  let randomIndex = Math.floor(Math.random() * percentages.length);
  let randomPercentage = percentages[randomIndex];
  let listPrice = (priceAsNumber * 100) / ( 100 - randomPercentage);
  let save = listPrice - priceAsNumber;
 
  let priceAsString = getCurrencyString(priceAsNumber);
  let listPriceAsString = getCurrencyString(listPrice);
  let saveAsString = getCurrencyString(save);

  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.category}>List price:</td>
            <td className={styles.listMoneyPrice}>{listPriceAsString}</td>
          </tr>
          <tr>
            <td className={`${styles.price} ${styles.category}`}>Price:</td>
            <td>
              <span className={styles.moneyPrice}>{priceAsString}</span>
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
            <td className={styles.savePrice}>{saveAsString} ({randomPercentage}%)</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) 
}

const getCurrencyString = (currencyAsNumber) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(currencyAsNumber);
}

export default Price;

