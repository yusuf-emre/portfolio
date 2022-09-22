import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className="box btn_shadow">
            <a href={props.link} target="_blank" rel="noreferrer">
              <h2>{props.title}</h2>
              <div className="img">
                  <img src={props.image} alt="project" />
              </div>
              <p className='card-description'>{props.description}</p>
            </a>
        </div>
    </>
  )
}

export default Card