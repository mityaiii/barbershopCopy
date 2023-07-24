import React from 'react'
import styles from '../../../styles/priceListContent/ShortText.css'

export const ShortText = ({ type, children }) => {
  return (
    <div className={ type }>
      <p className="short-text">
        { children }
      </p>
    </div>
  )
};
