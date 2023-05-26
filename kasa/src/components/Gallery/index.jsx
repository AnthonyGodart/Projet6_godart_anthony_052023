import styles from './gallery.module.css'
import Card from '../Card'
function Gallery(){
    return (
        <div className={styles.gallery}>
            <Card />
        </div>
    );
}
export default Gallery