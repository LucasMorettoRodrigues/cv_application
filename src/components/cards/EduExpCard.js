import { useState } from 'react'

import styles from './Card.module.css'

function EduExpCard({ index, handleOnClick, nome, date, title, location}) {

    const [visible, setVisible] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault()
        handleOnClick(e)
    }

    function showBtn() {
        setVisible(true)
    }

    function hideBtn() {
        setVisible(false)
    }
    
    return (

        <div className={`${styles.card} ${styles.flex}`} onMouseOver={showBtn} onMouseLeave={hideBtn}>            
            <div className={`${styles.flex_col} ${styles.left}`}>
                <h5>{date ? date : 'Date'}</h5>
                <h5>{location ? location : 'Location'}</h5>
            </div>

            <div className={styles.flex_col}>
                <h6>{nome ? nome : 'Name'}

                {visible && (
                    <button id={index} onClick={handleClick}>X</button> 
                )}
                
                </h6>
                <h6>{title ? title : 'Title'}</h6>
            </div>

        </div>
    )
}

export default EduExpCard