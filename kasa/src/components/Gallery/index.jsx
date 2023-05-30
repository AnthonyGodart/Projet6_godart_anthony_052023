import styles from './gallery.module.css'
import Card from '../Card'
import fetcher from '../../utils/fetcher';

const cardsData = await fetcher();

function Gallery(){
        return (
            <section className={styles.gallery}>
                {cardsData.map(cardData => {
                    return (
                        <Card key={cardData.id} id={cardData.id} title={cardData.title} cover={cardData.cover}/>
                    )
                })}
            </section>
        );
    }

export default Gallery