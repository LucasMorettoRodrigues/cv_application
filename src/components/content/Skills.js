import Container from '../layout/Container'
import NewSkill from '../form/NewSkill'

import styles from './Content.module.css'

import { useState } from 'react'

function Skills() {

    const [visible, setVisible] = useState(false)
    const [btnVisible, setBtnVisible] = useState(false)
    const [skill, setSkill] = useState('')
    const [skillList, setSkillList] = useState([])

    function showBtn() {
        setBtnVisible(true)
    }

    function hideBtn() {
        setBtnVisible(false)
    }

    function openForm() {
        setVisible(true)
    }

    function closeForm() {
        setVisible(false)
    }

    function addSkill() {
        setSkillList([...skillList, skill])
        setVisible(false)
        setSkill('')
    }

    function updateInfo(e) {
        setSkill(e.target.value)
        console.log(skill)
    }

    function deleteSkill(e) {
        setSkillList(skillList.filter((skill) => skill !== skillList[e.target.id]))
    }

    return (
        <Container handleOnClick={openForm}>
            <div className={styles.skill_box}
                onMouseOver={showBtn} 
                onMouseLeave={hideBtn}>
                {visible && 
                    <NewSkill
                        handleAdd={addSkill}
                        handleOnChange={updateInfo}
                        handleOnClick={closeForm}
                    />
                }
                <ul>
                    <li><span>Skills</span></li>
                    {skillList.length !== 0 && (
                        skillList.map((skill, index) => (
                            <li>
                                {skill}
                                {btnVisible && (
                                    <button id={index} onClick={deleteSkill}>X</button>
                                )}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </Container>
    )
}

export default Skills