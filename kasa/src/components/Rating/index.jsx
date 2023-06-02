import React from 'react'
import styles from './rating.module.css'

function Rating(props){
    return (
            <i className={`fa-solid fa-star ${styles.rating} ${props.color}`}></i>
    )    
}

export default Rating