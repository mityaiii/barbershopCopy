import React, { useState, useEffect } from 'react';
import styles from '../../styles/mainContent/MainContent.css';
import IndexColumns from './IndexColumn';
import News from './indexColumns/news/News';
import Contacts from './indexColumns/contacts/Contacts';
import Appointment from './indexColumns/appointment/Appointment';
import logo from '../../imgs/index-logo.png';
import MoreNews from './indexColumns/news/MoreNews';

const FeatureItem = ({header, description}) => {
  return(
    <li className='feature-item'>
      <h3>{ header }</h3>
      <p>{ description }</p>
    </li>
  )
}

function MainContent() {
  const [buttonSide, setButtonSide] = useState('left') 

  useEffect(() => {
    const handleResize = (event) => {
      setButtonSide(event.target.innerWidth < 840 ? 'right' : 'left');
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className='container'>
      <div className='center'>
        <a href="index.html" className="main-header-logo">
          <img src={ logo } alt="Логотип барбершопа"/>
        </a>
      </div>
      <section className="features" id="info-point">
        <h2 className='visually-hidden'>Барбершоп</h2>
        <ul className='features-list'>
          <FeatureItem header={ 'Быстро' } description={ 'Мы делаем свою работу быстро! Два часа пролетят незаметно и вы - счастливый обладатель стильной стрижки-минутки!' }/>
          <FeatureItem header={ 'КРУТО' } description={ 'ЗАБУДЬТЕ, КАК ВЫ СТРИГЛИСЬ РАНЬШЕ. МЫ СДЕЛАЕМ ИЗ ВАС ЗВЕЗДУ ФУТБОЛА ИЛИ КИНО! ВО ВСЯКОМ СЛУЧАЕ ВНЕШНЕ.' }/>
          <FeatureItem header={ 'ДОРОГО' } description={ 'НАШИ МАСТЕРА - ПРОФЕССИОНАЛЫ СВОЕГО ДЕЛА И НЕ МОГУТ СТОИТЬ ДЕШЕВО. К ТОМУ ЖЕ, РАЗВЕ ЦЕНА НЕ ДАЕТ ОПРЕДЕЛЕНЫЙ СТАТУС?' }/>
        </ul>
      </section>
      <IndexColumns>
        <News buttonSide={buttonSide == 'left'} type='left-column'/>
        <MoreNews buttonSide={buttonSide == 'right'}/>
      </IndexColumns>
      <IndexColumns>
        <Contacts type='left-column'/>
        <Appointment/>
      </IndexColumns>
    </main>
  )
}

export default MainContent