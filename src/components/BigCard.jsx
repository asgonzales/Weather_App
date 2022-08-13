import React from "react";
import styles from './BigCard.module.css';


export default function BigCard({datos}){


    return (
            <div className= {styles.BigCard}>
                <div className={styles.top}>
                    <h3 id = {styles.nombre}>{datos.name}</h3>
                    <h6>{datos.desc}</h6>
                </div>
                <div className={styles.bot}>
                    <div className={styles.datosIzq}>
                        <span>S.T: </span>
                        <span>{datos.term}</span>
                        <span>°</span>
                        <hr></hr>
                        <span>Nubosidad: </span>
                        <span>{datos.clouds}</span>
                        <span>%</span>
                        <hr></hr>
                        <span>Viento: </span>
                        <span>{datos.wind*3.6}</span>
                        <span>Km/hr</span>
                        <hr></hr>
                        <span>Visibilidad: </span>
                        <span>{datos.vis/1000}</span>
                        <span>Km</span>
                        <hr></hr>
                    </div>
                    <div className={styles.datosDer}>
                        <img src={`http://openweathermap.org/img/wn/${datos.img}@2x.png`} alt={'img'} />
                        <hr></hr>
                        <p>{datos.temp}°</p>
                        <hr></hr>
                        <span className={styles.min} >{datos.min}°</span>
                        <span> / </span>
                        <span className={styles.max} >{datos.max}°</span>
                    </div>
                </div>
        </div>
    )
}