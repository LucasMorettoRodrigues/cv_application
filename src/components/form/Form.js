import styles from './Form.module.css'

function Form({ handleOnClick , handleOnChange }) {

    const handleChange = (e) => {
        handleOnChange(e)
    }

    return (
        <form className={styles.form}>
            <label htmlFor="name">Name</label>
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
            <label htmlFor="profile">Profile</label>
            <textarea 
                name="profile" 
                id="profile" 
                rows="5"
                onChange={handleChange}
            />
            <button onClick={handleOnClick}>Close</button>
        </form>
    )
}

export default Form