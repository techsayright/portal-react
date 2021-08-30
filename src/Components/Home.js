import React from 'react'
import styles from './css/Home.module.scss'

export const Home = ({setIsOpen}) => {
    
    return (
        <div className={styles.Home}>
           <button type="button" onClick={()=>{setIsOpen(true)}}>Open PopUp</button> 
            <div>This is Just a Demo</div>
        </div>
    )
}
