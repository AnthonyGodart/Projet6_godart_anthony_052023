import styles from './card.module.css'
import { Link } from 'react-router-dom'

function Card(props){    
        return(
            <Link to={"/Housing/"+props.id} key={props.id}>
                <article className={styles.card}>
                    <figure className={styles.figure}>
                        <img className={styles.image} src={props.cover} alt="Background de la location" />
                        <figcaption className={styles.figcaption}>{props.title}</figcaption>
                    </figure>
                </article>
            </Link>
        )
}

export default Card