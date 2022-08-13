import React from 'react';
import Styles from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return <div className={Styles.primerDiv}>
    <div className={Styles.DivInput}>

    <input id='buscar' type='text' placeholder='Buscar...' onKeyDown={
      (e)=> {
        if(e.key==='Enter') {
          props.onSearch(document.querySelector('#buscar').value);
          document.querySelector('#buscar').value = '';
        }
      }
    }></input>

    <button onClick={() => {
      props.onSearch(document.querySelector('#buscar').value);
      document.querySelector('#buscar').value = '';
    }
    } >Agregar</button>
    </div>
  </div>
};