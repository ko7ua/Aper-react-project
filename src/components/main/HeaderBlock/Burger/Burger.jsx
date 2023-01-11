import React from "react";
import style from "./Burger.module.scss"

export default function Burger(props) {
    return(
        <div className={style.burgerRoot}  onClick={() => {props.setActive(!props.active)}}>
            <span></span>
        </div>
    )
}