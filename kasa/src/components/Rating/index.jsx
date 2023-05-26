import styles from './rating.module.css'

function Rating(){
    return(
        <div className={styles.rating}>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>
    )
}

export default Rating