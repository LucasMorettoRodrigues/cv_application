import { useState } from 'react'

import styles from './Container.module.css'

function Container(props) {

    const [visible, setVisible] = useState(false)

    function showBtn(e) {
        setVisible(true)
      }
    
      function hideBtn(e) {
        setVisible(false)
      }

    return(
        <div 
          className={`${styles.container} ${styles[props.customClass]}`} 
          onMouseOver={showBtn} 
          onMouseLeave={hideBtn}
        >
        {visible && <button className={styles.button} onClick={props.handleOnClick}>EDIT</button>}
        {props.children}
        </div>
    )
}

export default Container





