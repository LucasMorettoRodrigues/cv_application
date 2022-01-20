import img from '../img/selfie.jpg'

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
          <img src={ url ? url : img} alt='selfie' />
        </Container>
    )
  }

export default Selfie