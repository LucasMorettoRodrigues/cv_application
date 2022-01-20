import { useState } from 'react'

import Container from '../layout/Container'
import EduExpForm from '../form/EduExpForm'
import EduExpCard from '../cards/EduExpCard'

function Experience() {

  const [visible, setVisible] = useState(false)
  const [info, setInfo] = useState({})
  const [eduList, setEduList] = useState([
                                          {date: 'JAN 2018 - DEC 2019',
                                          title: 'Web Developer',
                                          name: 'Water Company',
                                          location: 'Midgard - Us'},
                                          {date: 'JAN 2020 - JAN 2022',
                                          title: 'Web Developer',
                                          name: 'Fire Company',
                                          location: 'Midgard - Eu'}
                                        ])

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

  return(
    <Container customClass='eduexp' handleOnClick={openForm}>
      {visible && (
        <EduExpForm handleOnClick={closeForm} handleOnChange={updateInfo} handleAdd={addtoList}/>
      )}
      <h4>Experience</h4>
      {eduList.length > 0 &&
        eduList.map( (info, index) => (
          <EduExpCard 
            date={info.date}
            title={info.title}
            nome={info.name}
            location={info.location}
            handleOnClick={removeExperience}
            index={index}
        />
        ))  
      }
    </Container>
  )
}

export default Experience