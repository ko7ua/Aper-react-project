import * as React from "react";
import {NavLink} from "react-router-dom";
import style from "./HeaderBlock.module.scss";
import icon from "../../../assets/img/icon.svg"
import Burger from "./Burger/Burger";

export default function HeaderBlock (props) {

    return (
        <div className={style.over}>
            <div className={style.container}>
            <header>
                    <div>
                        <NavLink to="/"><img src={icon} alt="icon"/></NavLink>
                    </div>
                    <div className={style.links}>
                        <NavLink to="business" className={({ isActive }) => isActive ? style.active : ""}>Business areas</NavLink>
                        <NavLink to="contacts" className={({ isActive }) => isActive ? style.active : ""}>Contacts</NavLink>
                        <NavLink to="featuerdi" className={({ isActive }) => isActive ? style.active : ""}>Featured images</NavLink>
                        <NavLink to="gear" className={({ isActive }) => isActive ? style.active : ""}>Gear cage</NavLink>
                        <button><a href="https://www.figma.com/file/vCJHFYy1TYhMQ0QCw0uzdp/Aperture" target="blank">Get template</a></button>
                    </div>
                    <Burger active={props.active} setActive={props.setActive}/>
            </header>
            </div>
            
        </div>
    )
}