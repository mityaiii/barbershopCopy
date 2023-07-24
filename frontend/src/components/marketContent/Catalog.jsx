import React from 'react'
import product from '../../imgs/product-1.jpg'
import { Link } from 'react-router-dom'
import { Pagination } from './Pagination'
import styles from '../../styles/marketContent/Catalog.css'

export const ItemCardImg = ({ ...rest }) => {
  return (
    <img {...rest} style={{ width: '220px', height: '165px' }} />
  )
}

export const ItemCard = ({ href, img, description }) => {
  return (
    <figure className='item-card'>
      <Link to={href}>
        <div className='img-wrapper'>
          {img}
        </div>
      </Link>
      { description }
    </figure>
  )
}

export const ItemCardDescription = ({ href, catalogCategory, catalogItemTitle, price }) => {
  return (
    <div className="item-card-description">
      <Link to={ href }>
        <h3>
          <span className="catalog-category">{catalogCategory}</span>
          <br />
          <span className="catalog-item-title">{catalogItemTitle}</span>
        </h3>
      </Link>
      <div className="price">
        <p className="price-text">{price}</p>
        <Link className="price-btn" to={ href }>купить</Link>
      </div>
    </div>
  )
}

export const Catalog = () => {
  const products = [
    {href: "product/1", catalogCategory: "Набор для путешествий", catalogItemTitle: "«Baxter of California»", price: 900},
    {href: "product/1", catalogCategory: "i don't know", catalogItemTitle: "«Baxter of California»", price: 1200},
    {href: "product/1", catalogCategory: "i don't know", catalogItemTitle: "«Baxter of California»", price: 1200},
    {href: "product/1", catalogCategory: "i don't know", catalogItemTitle: "«Baxter of California»", price: 1200},
    {href: "product/1", catalogCategory: "i don't know", catalogItemTitle: "«Baxter of California»", price: 1200},
    {href: "product/1", catalogCategory: "i don't know", catalogItemTitle: "«Baxter of California»", price: 1200},
  ];


  return (
    <section className='catalog'>
      <div className='items'>
        { products.map((el, idx) => ( 
          <ItemCard
            href={ el.href }
            img={ <ItemCardImg src={ product } alt='Набор для путешествий'/> }
            description={
              <ItemCardDescription
                href={ el.href }
                catalogCategory={el.catalogCategory}
                catalogItemTitle={el.catalogItemTitle}
                price={`${el.price} ₴`}
              />
            }
            key={idx}
          />
        )) }
      </div>
    </section>
  )
}
