import Education from '../content/Education'

import styles from './CvLeft.module.css'

function CvLeft() {
    return (
      <div className={styles.left_container}>
        <Education />
      </div>
    )
}

export default CvLeft