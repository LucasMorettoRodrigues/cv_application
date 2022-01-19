import { useState } from 'react'

import styles from './Card.module.css'

function SkillCard({ skillName, index, handleOnClick}) {

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
        <div className={styles.card} onMouseOver={showBtn} onMouseLeave={hideBtn}>
            {skillName}
            {visible && (
                <button id={index} onClick={handleClick}>X</button> 
            )}
        </div>
    )
}

export default SkillCard