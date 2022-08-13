import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className= {styles.CardComp} onClick={()=>props.bgChange(props.id) & props.cambiarBigCard(props.id)} >
     <div className={styles.top}>
        <h3 id = {styles.nombre}>{props.name}</h3>
        <p id={styles.equis} onClick={()=> props.onClose(props.name)}> X </p>
     </div>
      <div className={styles.bot}>
        <div className={styles.min}>
          <h5>Min</h5>
          <p>{props.min}</p>
        </div>
        <div className={styles.max}>
          <h5>Max</h5>
          <p>{props.max}</p>
        </div>
        <div className={styles.img}>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={'img'} />
        </div>
      </div>
    </div>
  )
};