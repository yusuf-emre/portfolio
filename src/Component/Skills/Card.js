import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className="box box_shadow">
            <h2>{props.title}</h2>
            {props.skills.map(skill => {
                return (
                <p>{skill.name}</p>
                ) 
            })}
        </div>
    </>
  )
}

export default Card