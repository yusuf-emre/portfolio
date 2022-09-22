import React from 'react'
import Card from './Card'
import "./Portfolio.css"
import data from './PortfolioApi'

const Portfolio = () => {
  return (
    <>
        <section className='portfolio top' id='portfolio'>
            <div className='container'>
                <div className="heading text-center">
                    <h1>My Portfolio</h1>
                </div>
                
                <div className="content grid">
                    {data.map(val => {
                        return <Card 
                            title={val.title} 
                            image={val.image} 
                            description={val.description} 
                            link={val.link}  />
                    })}
                </div>
            </div>

        </section>
    </>
  )
}

export default Portfolio