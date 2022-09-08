import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <>
        <section className='skills top' id='skills'>
            <div className="container">
                <div className="heading">
                    <h1>My Skills</h1>
                </div>

                <div className="content grid">
                    <div className="box btn_shadow">
                        <h2>General</h2>
                        <p>C#/.NET</p>
                        <p>JavaScript</p>
                    </div>
                    <div className="box btn_shadow">
                        <h2>Backend</h2>
                        <p>ASP.NET, MVC</p>
                        <p>NodeJS</p>
                        <p>REST API</p>
                        <p>LINQ</p>
                        <p>SQL Server</p>
                        <p>Entity Framework</p>
                        <p>Azure</p>                            
                    </div>
                    <div className="box btn_shadow">
                        <h2>Frontend</h2>
                        <p>React</p>
                        <p>Razor Pages</p>
                        <p>HTML</p>
                        <p>CSS</p>
                    </div>
                    <div className="box btn_shadow">
                        <h2>Tools</h2>
                        <p>Visual Studio Code</p>
                        <p>Docker</p>
                        <p>Git, GitHub</p>
                        <p>Azure</p>
                        <p>Figma</p>
                        <p>TDD</p>
                        <p>Agile work methods</p> 
                        <p>SEO</p> 
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}

export default Skills
