import React from 'react';
import Button from 'src/components/UI/Button';
import { useLess } from 'src/hooks/useLess';
import GetNewsButton from './GetNewsButton';
import styles from 'src/styles/mainContent/indexColumns/news/MoreNews.css';

const NewsItem = ({ date, children }) => {
  return (
    <li className='news-item'>
      <p>{ children }</p>
      <time datetime={ date }>{ date }</time>
    </li>
  )
}

const MoreNews = ({ type, buttonSide }) => {
  const NewsButton = buttonSide ? GetNewsButton() : null;

  return (
    <section className={'news more-news'}>
      <ul className={`news-list ${ type }`}>
        <NewsItem date={ '11 января' }>
          Нам наконец завезли Ягермайстер! Теперь Вы можете пропустить стаканчик во время стрижки
        </NewsItem>
        <NewsItem date={ '11 января' }>
          Нам наконец завезли Ягермайстер! Теперь Вы можете пропустить стаканчик во время стрижки
        </NewsItem>
        { NewsButton }
      </ul>
    </section>
  )
}

export default MoreNews;
