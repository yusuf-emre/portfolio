import React from 'react'
import "./Hero.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
    const words = [' Full Stack Developer', ' Professional Coder', ' .NET Developer'];
    const { text } = useTypewriter({
        words,
        loop: 0,
        typeSpeed: 70,
        deleteSpeed: 50,
        delaySpeed: 1000
    })
    return (
        <>
            <section className='hero' id='home'>
                <div className="container_home f_flex">
                    <div className="left top">
                        <h1>
                            Hi I'm <span>Yusuf</span>
                        </h1>
                        <h2>
                            a
                            <span>
                                {text}
                                <Cursor cursorStyle='_' />
                            </span>
                        </h2>
                        <p>
                            Passionate and driven software developer with strong business knowledge. Dedicated to finding creative solutions to complex problems. Excited to bring my skills and enthusiasm to a new team and contribute to the development of cutting-edge software.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero