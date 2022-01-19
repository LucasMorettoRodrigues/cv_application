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
                    <p>{info.address}</p>
                </li>
                <li>
                    <h5>Phone</h5>
                    <p>{info.phone}</p>
                </li>
                <li>
                    <h5>E-mail</h5>
                    <p>{info.email}</p>
                </li>
                <li>
                    <h5>Social</h5>
                    <p>{info.social}</p>
                </li>
            </ul>
            
            
            
            
        </Container>
    )
}

export default ContactInfo