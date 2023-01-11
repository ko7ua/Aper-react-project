import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer"
import Menu from "../HeaderBlock/Burger/Menu/Menu";
import HeaderBlock from "../HeaderBlock/HeaderBlock";
import style from "./Layout.module.scss"

export default function Layout() {
    const [menuActive, setMenuActive] = React.useState(false)

    return (
        <div className={style.body}>
            <HeaderBlock active={menuActive} setActive={setMenuActive}/>
            <Menu active={menuActive} setActive={setMenuActive}/>
            <Outlet/>
            <Footer/>
        </div>
    )
}