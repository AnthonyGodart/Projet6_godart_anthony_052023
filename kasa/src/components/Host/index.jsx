import styles from './host.module.css'

function Host(props){
    return (
        <div className={styles.hostContainer}>
            <p className={styles.hostName}>{props.name}</p>
            <figure className={styles.profilePic}>
                <img src={props.picture} alt={"Photo de "+ props.name} />
            </figure>
        </div>
    )
}

export default Host