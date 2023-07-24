import React from 'react'
import styles from '../../styles/UI/Button.css'

const Button = ({ children, className, ...rest }) => {
  if (className == "undefined")
    return (
      <a className={`button text-decoration-none${ className }`} { ...rest } href='#'>{ children }</a>
    )

    return (
      <a className={'button text-decoration-none'} { ...rest } href='#'>{ children }</a>
    ) 
}

export default Button;
