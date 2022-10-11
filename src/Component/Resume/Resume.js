import React from 'react'
import Card from './Card'
import data from './ResumeApi'
import "./Resume.css"

const Resume = () => {
  return (
    <>
        <section className="resume" id='resume'>
            <div className="container top">
                <div className="heading text-center">
                    <h1>My Resume</h1>
                </div>

                <div className="content-section mtop d_flex">
                    <div className="left education">
                        <div className="subheading ">
                            <h1>Education</h1>
                        </div>
                        <div className="content">
                            {data.map(val => {
                                if (val.category === "education") {
                                    return <Card 
                                        title={val.title} 
                                        year={val.year} 
                                        description={val.description} />
                                } 
                            })}
                        </div>
                    </div>
                    <div className="left experience">
                        <div className="subheading">
                            <h1>Experience</h1>
                        </div>
                        <div className="content">
                            {data.map(val => {
                                if (val.category === "experience") {
                                    return <Card 
                                        title={val.title} 
                                        year={val.year} 
                                        description={val.description} />
                                } 
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Resume