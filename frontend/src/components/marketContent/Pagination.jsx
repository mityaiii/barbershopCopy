import React from 'react'
import styles from '../../styles/marketContent/Pagination.css'

export const Pagination = () => {
  return (
    <ul className="pagination-list">
      <li className="pagination-item"><a href="#">1</a></li>
      <li className="pagination-item pagination-item-current"><a>2</a></li>
      <li className="pagination-item"><a href="#">3</a></li>
      <li className="pagination-item"><a href="#">4</a></li>
    </ul>
  )
}
