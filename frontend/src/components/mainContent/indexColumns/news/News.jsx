import React from 'react';
import styles from '../../../../styles/mainContent/indexColumns/news/News.css';
import { useLess } from 'src/hooks/useLess';
import GetNewsButton from './GetNewsButton';

const NewsItem = ({ date, children }) => {
  return (
    <li className='news-item'>
      <p>{ children }</p>
      <time dateTime={ date }>{ date }</time>
    </li>
  )
}

const News = ({ type, buttonSide }) => {
  const NewsButton = buttonSide ? GetNewsButton() : null;

  return (
    <section className={'news'} id="news-point">
      <h2>Новости</h2>
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

export default News;
