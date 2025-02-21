import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id ='home'className='hero'>
          <img src={profile_img} alt="profile" />
          <h1><span>Hello, I am Yesenia Benitez,
            a Full Stack Web Developer </span> </h1>
          <p>I specialize in Front-end development based in Orlando, Florida.</p>
          <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <div className="hero-resume">
                <button onClick={() => window.open('/MyResume.png', '_blank')}>My Resume</button>
               </div>
               
          
          </div>
        </div>
    )
}


export default Hero