import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Menu.module.scss";


function Menu(props) {
    console.log(props.active)
    return (
        <div className={props.active ?  style.active : style.menu}>
            <ul className={style.links}>
                <li>
                    <NavLink to="business" className={({ isActive }) => isActive ? style.active : ""}>Business areas</NavLink>
                </li>
                <li>
                    <NavLink to="contacts" className={({ isActive }) => isActive ? style.active : ""}>Contacts</NavLink>    
                </li>
                <li>
                    <NavLink to="featuerdi" className={({ isActive }) => isActive ? style.active : ""}>Featured images</NavLink>
                </li>
                <li>
                    <NavLink to="gear" className={({ isActive }) => isActive ? style.active : ""}>Gear cage</NavLink>
                </li>
            </ul>
        </div>
    
    );
}

export default Menu;