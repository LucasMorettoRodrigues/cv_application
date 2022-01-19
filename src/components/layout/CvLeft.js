import Education from '../content/Education'
import Experience from '../content/Experience'

import styles from './CvLeft.module.css'

function CvLeft() {
    return (
      <div className={styles.left_container}>
        <Education />
        <Experience />
      </div>
    )
}

export default CvLeft