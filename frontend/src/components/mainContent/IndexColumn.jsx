import React from 'react'
import styles from '../../styles/mainContent/IndexColumn.css'

function IndexColumns({ children }) {
  return (
    <div className='center'>
      <div className='index-columns'>
        { children }
      </div>
    </div>
  )
}

export default IndexColumns;