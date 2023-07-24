import React from 'react'
import styles from '../../../styles/priceListContent/CustomList1.css'

export const CustomList1 = ({ type }) => {
  return (
    <div className={ type }>
      <h2>Мы используем только<br/>лучшие средства:</h2>
      <ul className="custom-list-1">
        <li>Baxter of California</li>
        <li>Mr Natty</li>
        <li>Suavecito</li>
        <li>Malin+Goetz</li>
      </ul>
    </div>
  )
}
