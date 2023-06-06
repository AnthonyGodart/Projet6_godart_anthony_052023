import React from 'react'

function Rating(props){
    return (
            <i className={`fa-solid fa-star ${props.color}`}></i>
    )    
}

export default Rating