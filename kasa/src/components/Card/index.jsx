import styles from './card.module.css'
import fetcher from '../../utils/fetcher'
import { Link } from 'react-router-dom'

const cardsData = await fetcher()

function Card(){    
     return (cardsData.map(cardData => {
        return(
            <Link to={"/Housing/"+cardData.id} key={cardData.id}>
                <article className={styles.card}>
                    <figure className={styles.figure}>
                        <img className={styles.image} src={cardData.cover} alt="Background de la location" />
                        <figcaption className={styles.figcaption}>{cardData.title}</figcaption>
                    </figure>
                </article>
            </Link>
        )}
    ))
}

export default Card