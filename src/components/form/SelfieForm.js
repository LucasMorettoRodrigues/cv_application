import styles from './Form.module.css'

function SelfieForm({ handleOnChange, handleOnClick}) {

    const handleChange = (e) => {
        handleOnChange(e)
    }
    
    return (
        <form className={styles.form}>
            <label htmlFor="url">URL</label>
            <input 
                name="url" 
                id="url" 
                type="text" 
                onChange={handleChange}
            />
            <button onClick={handleOnClick}>Close</button>
        </form>
    )
}

export default SelfieForm