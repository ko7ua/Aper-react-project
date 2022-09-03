import {Outlet} from "react-router-dom";
import Footer from "./main/Footer"
import HeaderBlock from "./main/HeaderBlock/HeaderBlock";
import style from "./main/Layout.module.scss"

export default function Layout() {
    return (
        <div className={style.body}>
            <HeaderBlock/>
            <Outlet/>
            <Footer/>
        </div>
    )
}