import styles from './Form.module.css'

function NewSkill({ handleOnChange , handleAdd , handleOnClick}) {

    const handleChange = (e) => {
        handleOnChange(e)
    }

    const add = (e) => {
        e.preventDefault()
        handleAdd()
    }
    
    return (
        <form className={styles.form}>
            <label htmlFor="skill">Skill</label>
            <input 
                name="skill" 
                id="skill" 
                type="text" 
                onChange={handleChange}
            />
            <div>
                <button onClick={add}>Add</button>
                <button onClick={handleOnClick}>Close</button>
            </div>
        </form>
    )
}

export default NewSkill