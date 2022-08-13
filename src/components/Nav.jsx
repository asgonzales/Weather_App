import React from "react";
import BarraBusqueda from "./SearchBar";
import Styles from "./Nav.module.css";
import Henry from "./logoHenry.png";
import {NavLink} from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className={Styles.Nav}>
            <img src={Henry} alt='img'/>
            <NavLink  to='/' >
                <h3>Henry - Weather App</h3>
            </NavLink>
            <div>
                <BarraBusqueda
                    onSearch = {props.search}
                />
            </div>
        </div>
    )
}