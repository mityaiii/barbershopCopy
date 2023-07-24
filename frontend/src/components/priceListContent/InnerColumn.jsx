import React from 'react'
import styles from '../../styles/priceListContent/InnerColumn.css'

function InnerColumn({ children }) {
  return (
    <div className='inner-columns'>
      { children }
    </div>
  )
}

export default InnerColumn;