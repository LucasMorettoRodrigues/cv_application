import styles from './Content.module.css'

import { useState } from 'react'

import Container from '../layout/Container'
import EduExpForm from '../form/EduExpForm'

function Experience() {

  const [visible, setVisible] = useState(false)
  const [btnVisible, setBtnVisible] = useState('false')
  const [info, setInfo] = useState({})
  const [eduList, setEduList] = useState([])

  const openForm = () => {
    setVisible(true)
  }

  const closeForm = () => {
    setVisible(false)
  }

  function updateInfo(e) {
    setInfo({ ...info, [e.target.name]: e.target.value})
    console.log(info)
  }

  function addtoList() {
      setEduList([...eduList, info])
      setInfo({})
  }

  function removeExperience(e) {
    console.log(eduList)
    setEduList(eduList.filter((edu) => edu !== eduList[e.target.id]))
  }

  function showBtn(e) {
    setBtnVisible(true)
  }

  function hideBtn(e) {
    setBtnVisible(false)
  }


  return(
    <Container customClass='fit' handleOnClick={openForm}>
      {visible && (
        <EduExpForm handleOnClick={closeForm} handleOnChange={updateInfo} handleAdd={addtoList}/>
      )}
      <h4>Experience</h4>
      {eduList.length > 0 &&
        eduList.map( (info, index) => (
            <div id={index} className={styles.flex}
            onMouseOver={showBtn} 
            onMouseLeave={hideBtn}>
              <div className={styles.left}>
                <h5>{info.date ? info.date : 'Date'}</h5>
                <h6>{info.title ? info.title : 'Title'}</h6>
              </div>
              <div>
                {btnVisible && (
                  <button className={styles.x_btn} id={index} onClick={removeExperience}>X</button>
                )}
                <h6>{info.name ? info.name : 'Name'}</h6>
                <h5>{info.location ? info.location : 'Location'}</h5>
              </div>
            </div>
        ))  
      }
    </Container>
  )
}

export default Experience