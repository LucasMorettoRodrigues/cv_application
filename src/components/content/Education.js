import { useState } from 'react'

import Container from '../layout/Container'
import EduExpForm from '../form/EduExpForm'
import EduExpCard from '../cards/EduExpCard'

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
          <EduExpCard 
            date={info.date}
            title={info.title}
            nome={info.name}
            location={info.location}
            handleOnClick={removeEducation}
            index={index}
          />
        ))  
      }
    </Container>
  )
}

export default Education