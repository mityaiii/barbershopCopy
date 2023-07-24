import React, { useMemo } from 'react'
import Button from '../../../../components/UI/Button';
import studio from '../../../../imgs/studio.jpg'
import { useIsSmallObject } from '../../../../hooks/useIsSmallObject';
import styles from '../../../../styles/mainContent/indexColumns/gallery/Gallery.css'

const GetGalleryPreviousButton = () => {
  const isSmallButton = useIsSmallObject()

  return isSmallButton ? 
  <Button className={'gallery-mobile-button-back mobile-button'}> { '<' } </Button>: 
  <Button className={'gallery-button gallery-button-back'}> Назад </Button> 
} 

const GetGalleryNextButton = () => {
  const isSmallButton = useIsSmallObject()

  return isSmallButton ? 
  <Button className={'gallery-mobile-button-next mobile-button'}> { '>' } </Button> :
  <Button className={'gallery-button gallery-button-next'}> Вперед </Button>
} 

function Gallery() {
  return (
    <section className='gallery'>
      <h2>Фотогалерея</h2>
      <div id="myCarousel" className="carousel slide bg-inverse w-100 ml-auto mr-auto" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block w-100" src={ studio } alt="Первый слайд"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ studio } alt="Второй слайд"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ studio } alt="Третий слайд"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Предыдущий</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Следующий</span>
        </a>
      </div>
    </section>
  )
}

export default Gallery;
