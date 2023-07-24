import React from 'react'
import productPhoto from '../../imgs/product-1.jpg'
import { Link } from 'react-router-dom'
import styles from '../../styles/product/Product.css'

const ProductPhoto = () => {
	return (
		<section className="product-photos">
			<h2 className="visually-hidden">Изображения товара</h2>
			<p className="product-photo-full">
				<img src={ productPhoto } className='full-img' alt="Фото всего набора"/> 
			</p>
			<ul className="product-photo-preview">
				<li><img src={ productPhoto } alt="Фото в анфас"/></li>
				<li><img src={ productPhoto } alt="Фото в профиль"/></li>
				<li><img src={ productPhoto } alt="Фото отдельной части"/></li>
			</ul>
		</section>
	)
}

function Product({ productTitle }) {
  return (
    <div className='container'>
      <h1 className='page-title'> { productTitle } </h1>
      
      <ul className="breadcrumbs">
				<li><Link to={'/'}>Главная</Link></li>
				<li className='last'><Link to={'/market'}>Магазин</Link></li>
			</ul>

      <div className='product catalog-columns'>
				<ProductPhoto/>

        <section className="product-info">
					<h2 className="visually-hidden">Описание товара</h2>
					<p className="product-availability">Есть в наличии</p>
					<p className="product-article">Артикул: dexter-ae</p>
					<p className="product-text">Travel Kit - необходимый 
						аксессуар во время любого путешествия. В аккуратной
						кожаной сумке находится все, что нужно для бритья и
						ухода за кожей во время рабочей поездки или отдыха:
						средство для умывания, увлажняющий крем, крем для
						бритья, крем после бритья, шампунь. Набор также может
						стать отличным подарком.</p>
					<p className="product-price">
						<b>900 ₴</b>
						<a className="button" href="#">Купить</a>
					</p>
					<h3>В набор входят:</h3>
					<ul>
						<li>Средство для умывания (50 мл)</li>
						<li>Увлажняющий крем (50 мл)</li>
						<li>Крем для бритья (50 мл)</li>
						<li>Крем после бритья, шампунь (50 мл)</li>
						<li>Удобная кожаная косметичка</li>
					</ul>
				</section>
      </div>
    </div>
  )
}

export default Product;