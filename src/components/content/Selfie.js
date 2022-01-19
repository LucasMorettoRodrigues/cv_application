import styles from './Content.module.css'

import { useState } from 'react'

import Container from '../layout/Container'
import SelfieForm from '../form/SelfieForm'

function Selfie() {

  const [visible, setVisible] = useState(false)
  const [url, setUrl] = useState('')

  function openForm() {
    setVisible(true)
  }

  function closeForm() {
    setVisible(false)
  }

  function changeURL(e) {
    setUrl(e.target.value)
  }

  return(
        <Container handleOnClick={openForm}>
          {visible && (
            <SelfieForm 
              handleOnChange={changeURL}
              handleOnClick={closeForm}
            />
          )}
          <img src={ url ? url : 'https://via.placeholder.com/200'} alt='selfie' />
        </Container>
    )
  }

export default Selfie