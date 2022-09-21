import React from 'react'
import Card from './Card'
import "./Skills.css"
import data from './SkillsApi'

const Skills = () => {
  return (
    <>
        <section className='skills top' id='skills'>
            <div className="container">
                <div className="heading">
                    <h1>My Skills</h1>
                </div>

                <div className="content grid">
                    {data.map(val => {
                        return <Card title={val.title} skills={val.skills} />
                    })}
                </div>
            </div>

        </section>
    </>
  )
}

export default Skills
