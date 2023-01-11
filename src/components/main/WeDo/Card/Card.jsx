import style from "./Card.module.scss"

export default function Card(props) {
    return (
        <div className={style.card} style={{ backgroundImage: `url(${props.back})` }}>
            <h4>Product Photography</h4>
            <p>Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
            <button>Read more</button>
        </div>
    )
}