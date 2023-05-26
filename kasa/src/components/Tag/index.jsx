import styles from './tag.module.css'

function Tag(){
    return (
        <ul className={styles.tagContainer}>
            <li className={styles.tag}>Tag 1</li>
            <li className={styles.tag}>Tag 2</li>
            <li className={styles.tag}>Tag 3</li>
            <li className={styles.tag}>Tag 4</li>
        </ul>
    )
}

export default Tag