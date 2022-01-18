import styles from './HeaderContent.module.css'

import { useState } from 'react'

import Container from './Container'
import Form from './../form/Form'

function HeaderContent() {

  const [visible, setVisible] = useState(false)
  const [info, setInfo] = useState({})

  const openForm = () => {
    setVisible(true)
  }

  const closeForm = () => {
    setVisible(false)
  }

  function updateInfo(e) {
    setInfo({ ...info, [e.target.name]: e.target.value})
  }

  return(
    <Container customClass='fit' handleOnClick={openForm}>
      {visible && (
        <Form handleOnClick={closeForm} handleOnChange={updateInfo}/>
      )}
      <h1>{info.name ? info.name : 'Name'}</h1>
      <h3>{info.title ? info.title : 'Title'}</h3>
      <h2>Profile</h2>
      <p>{info.profile ? info.profile : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}</p>
    </Container>
  )
}

export default HeaderContent