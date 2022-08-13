import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import BigCard from './components/BigCard.jsx';
import {Route, Routes} from 'react-router-dom';

function App() {
  const [cities, setCities] = useState([]);
  const [bigCard, setbigCard] = useState({});
  let body = document.querySelector('body');
  function cambiarBigCard(id){
    cities.forEach(e=> {
      if (e.id === id) setbigCard(e);
    })
  }
  function bgChange (ciudadId) {
    cities.forEach(e=> {
      if (e.id === ciudadId) body.className= e.desc;
    })
  }
  function Busqueda(ciudad) {
    if (ciudad === '') return
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=64fb61ee39088ba371cbab0ccb32feb5&units=metric&lang=es`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined) {
        var existe = false;
        var nuevaCiudad = {
          name: recurso.name,
          max: recurso.main.temp_max,
          min: recurso.main.temp_min,
          img: recurso.weather[0].icon,
          clouds: recurso.clouds.all,
          temp: recurso.main.temp,
          term: recurso.main.feels_like,
          wind: recurso.wind.speed,
          desc: recurso.weather[0].description,
          vis: recurso.visibility,
          id: recurso.id
        }
        cities.forEach(e=> {
          if(e.name===nuevaCiudad.name) existe=true
        })
        if(!existe) setCities(oldCities => [...oldCities, nuevaCiudad]);
      }
      else {
        alert('Ciudad no encontrada');
      }
    })
  }
  function Cerrar(Nombre) {
    setCities(oldCities => oldCities.filter(e => e.name !== Nombre))
  }
  


  return (
    <div className='App'>
      <div>
        <Nav
        search = {Busqueda}
        />
      </div>
      <div className='Carta'>
        <Routes>
          <Route
            path='/'
            element={
              bigCard.name?<BigCard datos={bigCard} />:<p></p>
            }
          />
        </Routes>
      </div>
      <hr />
      <Routes>
        <Route
          path='/'
          element={
            <div className='Cartas'>
              <Cards
                cities={cities}
                onClose={Cerrar}
                bgChange={bgChange}
                cambiarBigCard={cambiarBigCard}
              />
            </div>      
          }
        />
      </Routes>
    </div>
  );
}

export default App;
