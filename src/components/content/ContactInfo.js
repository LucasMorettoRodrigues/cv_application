import Container from '../layout/Container'
import AddressForm from '../form/AdressForm'

import styles from './Content.module.css'

import { useState } from 'react'

function ContactInfo() {

    const [visible, setVisible] = useState(false)
    const [info, setInfo] = useState({})

    function openForm() {
        setVisible(true)
    }

    function closeForm() {
        setVisible(false)
    }

    function updateInfo(e) {
        setInfo({...info, [e.target.id]: e.target.value})
    }

    return (
        <Container handleOnClick={openForm}>
            {visible && 
                <AddressForm 
                    handleOnClick={closeForm}
                    handleOnChange={updateInfo}
                />
            }
            <ul className={styles.list}>
                <li>
                    <h5>Address</h5>
                    <p>{info.address ? info.address : 'Midgard - Us'}</p>
                </li>
                <li>
                    <h5>Phone</h5>
                    <p>{info.phone ? info.phone : '(55) 5555 - 5555'}</p>
                </li>
                <li>
                    <h5>E-mail</h5>
                    <p>{info.email ? info.email : 'myemail@email.com'}</p>
                </li>
                <li>
                    <h5>Social</h5>
                    <p>{info.social ? info.social : 'www.mysite.com'}</p>
                </li>
            </ul>
        </Container>
    )
}

export default ContactInfo