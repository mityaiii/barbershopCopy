import React from 'react'
import productPhoto from 'src/imgs/product-1.jpg'
import { Link } from 'react-router-dom'
import { useLess } from 'src/hooks/useLess'
import styles from 'src/styles/newsContent/News.css'

const NewsDesktopMode = () => {
  return (    
  <div className='catalog-columns news-catalog'>
    <img className='news-photo' src={productPhoto}/>

    <section className="product product-info news-info">
      <p className='news-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi officiis error obcaecati voluptatibus nostrum iusto in rem delectus, autem atque accusantium, esse similique blanditiis illum architecto fugit velit dicta labore!</p>
    </section>
  </div>
)
}

const NewsMobileMode = () => {
  return (    
    <div className='catalog-columns news-catalog'>
      <img className='news-photo' src={productPhoto}/>
      <section className="product product-info news-info">
        <p className='news-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi officiis error obcaecati voluptatibus nostrum iusto in rem delectus, autem atque accusantium, esse similique blanditiis illum architecto fugit velit dicta labore!</p>
      </section>
    </div>
  )
}

const NewsCatalog = () => {
  const newsCatalogMod = useLess(1000)

  return (
  <>
    { newsCatalogMod ? <NewsMobileMode/> : <NewsDesktopMode/>} 
  </>
  )
}

const News = ({ productTitle }) => {


  return (
    <div className='container news-container'>
      <h1 className='page-title'> { productTitle } </h1>
      
      <ul className="breadcrumbs">
				<li><Link to={'/'}>Главная</Link></li>
				<li className='last'><Link to={'/news-list'}>Новости</Link></li>
			</ul>

      <NewsCatalog/>
    </div>
  )
}

export default News