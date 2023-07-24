import React, { useState } from "react";
import styles from 'src/styles/UI/Map.css';
import Button from "./Button";

export default function SimpleMap({ mapState, setMapState }) {
  
  const ChangeMapState = () => {
    setMapState(mapState === '' ? 'modal-show' : '')
  }

  return (
    <div className={`modal modal-map ${ mapState }`}>
      <h2 className="visually-hidden">Как до нас добраться</h2>
      <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.920144295933!2d30.513643351820452!3d50.442588079373465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cef8ed6f7ac9%3A0x61a88c50c9491958!2sTarasa+Shevchenko+Blvd%2C+11%2C+Kyiv%2C+01004!5e0!3m2!1sen!2sua!4v1525729254654" width="766" height="560" allowfullscreen=""></iframe>	
      <button onClick={ChangeMapState} class="modal-close" type="button">Закрыть</button>
    </div>
  );
}