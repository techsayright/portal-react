import React from 'react'
import styles from './css/Dialog.module.scss'

export const Dialog = ({isOpen, setIsOpen}) => {

    if(!isOpen){return false}

    return (
        <React.Fragment>
            <div className={styles.overlay}></div>
            <div className={styles.dialog}>
                <button type="button" onClick={()=>{setIsOpen(false)}}>Close PopUp</button>
                <h1>This is the PopUp</h1>
            </div>
        </React.Fragment>
    )
}
