import styles from './host.module.css'

function Host(props){
    return (
        <div className={styles.hostContainer}>
            <p className={styles.hostName}>Prénom long <br/> Nom</p>
            <p className={styles.profilePic}></p>
        </div>
    )
}

export default Host