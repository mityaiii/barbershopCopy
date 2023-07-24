import React from 'react'
import styles from '../../../styles/priceListContent/CustomList2.css'

export const CustomList2 = ({ type }) => {
  return (
    <div className={ type }>
      <h2>Цены на услуги</h2>
      <table className="custom-table-1">
        <tbody><tr>
          <td>Стрижка</td>
          <td>500 ₴</td>
        </tr>
        <tr>
          <td>Стрижка бороды</td>
          <td>200 ₴</td>
        </tr>
        <tr>
          <td>Накрутка усов</td>
          <td>150 ₴</td>
        </tr>
      </tbody></table>
    </div>
  )
}
