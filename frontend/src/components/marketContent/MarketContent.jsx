import React from 'react'
import { Catalog } from './Catalog'
import Filters from './Filters'
import { Link } from 'react-router-dom'

function MarketContent() {
  return (
    <main className='container'>
      <h1 className="page-title">Barbershop - магазин</h1>
      <ul className="breadcrumbs">
				<li><Link to={"/"}>Главная</Link></li>
				<li className='last'><Link to={"/market"}>Магазин</Link></li>
			</ul>
      <div className='catalog-columns'>
        <Filters/>
        <Catalog/>
      </div>
    </main>
  )
}

export default MarketContent