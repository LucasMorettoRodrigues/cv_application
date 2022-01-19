import ContactInfo from '../content/ContactInfo'
import Skills from '../content/Skills'

import styles from './CvRight.module.css'

function CvRight() {
    return (
        <div className={styles.right_container}>
            <ContactInfo />
            <Skills />
        </div>
    )
}

export default CvRight