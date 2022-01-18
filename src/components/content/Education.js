import styles from './Content.module.css'

import { useState } from 'react'

import Container from '../layout/Container'
import EduExpForm from '../form/EduExpForm'

function Education() {

  const [visible, setVisible] = useState(false)
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

  function removeEducation(e) {
    console.log(eduList)
    setEduList(eduList.filter((edu) => edu !== eduList[e.target.id]))
  }

  return(
    <Container customClass='fit' handleOnClick={openForm}>
      {visible && (
        <EduExpForm handleOnClick={closeForm} handleOnChange={updateInfo} handleAdd={addtoList}/>
      )}
      <h4>Education</h4>
      {eduList.length > 0 &&
        eduList.map( (info, index) => (
          <div className={styles.flex}>
            <div className={styles.left}>
              <h5>{info.date ? info.date : 'Date'}</h5>
              <h3>{info.title ? info.title : 'Title'}</h3>
            </div>
            <div>
              <button id={index} onClick={removeEducation}>X</button>
              <h5>{info.name ? info.name : 'School / Company'}</h5>
              <h3>{info.location ? info.location : 'Location'}</h3>
            </div>
          </div>
        ))  
      }
    </Container>
  )
}

export default Education