import React from 'react'
import { Catalog } from "../marketContent/Catalog";
import { Link } from 'react-router-dom';
import { ItemCard, ItemCardImg, ItemCardDescription } from '../marketContent/Catalog';
import product from 'src/imgs/product-1.jpg'
import styles from 'src/styles/newsContent/NewsContent.css'

export const NewsCatalog = () => {
  const news = [
    {href: "news/1", catalogCategory: "Набор для путешествий", catalogItemTitle: "«Baxter of California»", price: 900},
    {href: "news/1", catalogCategory: "i don't know", catalogItemTitle: "«Baxter of California»", price: 1200},
  ];

  return (
    <section className='catalog pt-5'>
      <div className='items'>
        { news.map((el, idx) => ( 
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

const NewsContent = () => {
  return (
    <main className='container news-list-container'>
      <div>
        <h1 className="page-title">Barbershop - новости</h1>
        <ul className="breadcrumbs">
          <li><Link to={"/"}>Главная</Link></li>
          <li className='last'><Link to={"/news-list"}>Новости</Link></li>
        </ul>
        <NewsCatalog/>
      </div>
    </main>
  )
}

export default NewsContent;
