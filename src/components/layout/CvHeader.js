import styles from './CvHeader.module.css'

import Selfie from './Selfie'
import HeaderContent from './HeaderContent'

function CvHeader() {

  return(
      <div className={styles.header_container}>
        <Selfie />
        <HeaderContent />
      </div>
    )
  }

export default CvHeader