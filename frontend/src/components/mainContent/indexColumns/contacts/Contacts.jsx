import React, { useState } from 'react';
import Button from 'src/components/UI/Button';
import styles from 'src/styles/mainContent/indexColumns/contacts/Contacts.css';
import Map from 'src/components/UI/Map';

function Contacts({ type }) {
  const [mapState, setMapState] = useState('');

  const ChangeMapState = (e) => {
    e.preventDefault();
    setMapState(mapState === '' ? 'modal-show' : '')
  }

  return (
    <section className={`contacts ${ type }`} id='contacts-point'>
      <h2>Контактная информация</h2>
      <p>
						Барбершоп контакты<br/>
						Адрес: г. Киев, Б. Шевченка, Д. 11/18<br/>
						Телефон: +38 (093) 088-24-55
			</p>
      <p>
						Время работы:<br/>
						пн-пт: с 10:00 до 22:00<br/>
						сб-вс: с 10:00 до 19:00
			</p>
      <Button onClick={ ChangeMapState } className='contacts-button contacts-button-map'>Как проехать</Button>
      <Map mapState={ mapState } setMapState={ setMapState }/>
    </section>
  )
}

export default Contacts;
