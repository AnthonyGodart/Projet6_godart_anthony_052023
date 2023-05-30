import styles from './tag.module.css'

function Tag(props){
    return (
        <ul className={styles.tagContainer}>
            <li className={styles.tag}>{props.tags}</li>
            <li className={styles.tag}>{props.tags}</li>
            <li className={styles.tag}>{props.tags}</li>
            <li className={styles.tag}>{props.tags}</li>
        </ul>
    )
}

export default Tag