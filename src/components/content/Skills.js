import Container from '../layout/Container'
import NewSkill from '../form/NewSkill'
import SkillCard from '../cards/SkillCard'

import styles from './Content.module.css'

import { useState } from 'react'

function Skills() {

    const [visible, setVisible] = useState(false)
    const [skill, setSkill] = useState('')
    const [skillList, setSkillList] = useState([])

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
        <Container customClass='skill' handleOnClick={openForm}>
            <div className={styles.skill_box}>
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
                            <SkillCard 
                                skillName={skill}
                                index={index}
                                handleOnClick={deleteSkill}
                            />
                        ))
                    )}
                </ul>
            </div>
        </Container>
    )
}

export default Skills