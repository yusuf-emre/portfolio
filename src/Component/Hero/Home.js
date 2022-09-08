import React from 'react'
import "./Home.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
    const words = [' Full Stack Developer.', ' Professional Coder.', ' .NET Developer'];
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
                <div className="container f_flex top">
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
                            After working for several years in consulting and banking, I moved to Sweden and switched my career to software development. My motivation is to combine my business knowledge with programming skills to create products and services fulfilling customer needs.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home