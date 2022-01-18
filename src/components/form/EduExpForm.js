import styles from './Form.module.css'

import { useState } from 'react'

function EduExpForm({ handleOnClick , handleOnChange , handleAdd }) {

    const handleChange = (e) => {
        handleOnChange(e)
    }

    const add = (e) => {
        e.preventDefault()
        handleAdd()
    }

    return (
        <form className={styles.form}>
            <label htmlFor="name">School / Company</label>
            <input 
                name="name" 
                id="name" 
                type="text" 
                onChange={handleChange}
            />
            <label htmlFor="title">Title</label>
            <input 
                name="title" 
                id="title" 
                type="text" 
                onChange={handleChange}
            />
            <label htmlFor="date">Date</label>
            <input 
                name="date" 
                id="date" 
                type="text" 
                onChange={handleChange}
            /><label htmlFor="location">Location</label>
            <input 
                name="location" 
                id="location" 
                type="text" 
                onChange={handleChange}
            />
            <button onClick={handleOnClick}>Close</button>
            <button onClick={add}>Add</button>
        </form>
    )
}

export default EduExpForm