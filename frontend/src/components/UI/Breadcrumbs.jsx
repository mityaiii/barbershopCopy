import React from 'react'

export const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <ul className="breadcrumbs">
      <li><a href="index.html">Главная</a></li>
      <li className="breadcrumbs-current">Прайс-лист</li>
    </ul>
  )
}
