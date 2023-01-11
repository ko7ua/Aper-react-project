import style from "./WeDoSection.module.scss"
import Card from "../Card/Card";
import background from "../../../../assets/img/card.jpg"
import background1 from "../../../../assets/img/card1.jpg"
import background2 from "../../../../assets/img/card2.jpg"
import background3 from "../../../../assets/img/card3.jpg"


export default function WeDoSection() {
    return(
        <section className={style.wedo}>
            <div className={style.container}>
                <h2>What we do.</h2>
                <p>The areas that we're specialized in.</p>
            </div>
            <div className={style.card}>
                <Card back={background}/>
                <Card back={background1}/>
                <Card back={background2}/>
                <Card back={background3}/>
            </div>

        </section>
    )
}