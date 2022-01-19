import styles from './Form.module.css'

function AddressForm({ handleOnClick , handleOnChange }) {

    const handleChange = (e) => {
        handleOnChange(e)
    }

    return (
        <form className={styles.form}>
            <label htmlFor="address">Address</label>
            <input 
                name="address" 
                id="address" 
                type="text" 
                onChange={handleChange}
            />
            <label htmlFor="phone">Phone</label>
            <input 
                name="phone" 
                id="phone" 
                type="text" 
                onChange={handleChange}
            />
            <label htmlFor="email">E-mail</label>
            <input 
                name="email" 
                id="email" 
                type="text" 
                onChange={handleChange}
            /><label htmlFor="social">Social</label>
            <input 
                name="social" 
                id="social" 
                type="text" 
                onChange={handleChange}
            />
            <button onClick={handleOnClick}>Close</button>
        </form>
    )
}

export default AddressForm