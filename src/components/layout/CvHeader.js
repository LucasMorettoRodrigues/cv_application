import styles from './CvHeader.module.css'

import Selfie from '../content/Selfie'
import HeaderContent from '../content/HeaderContent'

function CvHeader() {

  return(
      <div className={styles.header_container}>
        <Selfie />
        <HeaderContent />
      </div>
    )
  }

export default CvHeader