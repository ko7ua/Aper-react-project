import React from "react";
import style from "./Footer.module.scss"
import {NavLink} from "react-router-dom";
import icon from "../../../assets/img/icon.svg";

export default function Footer() {
    return(
        <div className={style.over}>
            <footer className={style.container}>
                <section className={style.footertop}>
                    <div>
                        <NavLink to="/"><img src={icon} alt="icon"/></NavLink>
                        <p>Photographers & videographers capturing the world around us.</p>
                    </div>
                    <div className={style.footertopleft}>
                        <ul>
                            <li className={style.topli}>BUSINESS AREAS</li>
                            <li>Product Photography</li>
                            <li>Architecture Photography</li>
                            <li>Drone Photography</li>
                            <li>Wildlife Photography</li>
                        </ul>
                        <ul>
                            <li className={style.topli}>PAGES</li>
                            <li>Gear cage</li>
                            <li>Featured images</li>
                            <li>Contact</li>
                            <li>Style guide</li>
                            <li>Instructions</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                </section>
            <div className={style.line}></div>
            <section className={style.middle}>
                <div>
                    <p className={style.midsub}>Subscribe to our newsletter</p>
                    <p className={style.midsubdown}>Read about all the things we do.</p>
                </div>
                <button className={style.butt}></button>
            </section>
            <div className={style.line}></div>
            
            <div className={style.license}>© Aperture Photography, Inc. All rights reserved. Licensing</div>
            </footer>
        </div>
    )}