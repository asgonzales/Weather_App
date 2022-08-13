import React from 'react';
import Card from './Card.jsx';
import Styles from './Cards.module.css';

export default function Cards(props) {
  return (<div className={Styles.Cartas}>
    {
      props.cities?.map(e=> (
        <Card
          key={e.id}
          id={e.id}
          name = {e.name}
          max = {e.max}
          min = {e.min}
          img = {e.img}
          onClose = {props.onClose}
          bgChange = {props.bgChange}
          cambiarBigCard={props.cambiarBigCard}
        />
      ))
    }
  </div>
  )
};