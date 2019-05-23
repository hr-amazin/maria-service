import React from 'react';

const Price = ({price}) =>  {
  let percentages = [.08, .10, .15, .20];
  let randomIndex = Math.floor(Math.random() * percentages.length);
  let randomPercentage = percentages[randomIndex];
  let listPrice = Math.floor(price * (1 + randomPercentage));
  let save = `${Math.floor(listPrice - price)} (${randomPercentage * 100}%)`;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>List price:</td>
            <td>${listPrice}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>${price}</td>
          </tr>
          <tr>
            <td>You save:</td>
            <td>${save}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ) 
}

export default Price;
