import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
            <div className="about-right">
                <div className="about-para">
                    <p> I am a coding ethusiast and a Entry-level developer with a passion for learning and problem-solving. On my free time I Enjoy creating projects that challenge me and help me grow.</p>
                    <p>My goal at the end is to gain hands-on experience and contribute to projects where I can apply my skills and continue learning. I am excited to explore opportunities in web development.
                    </p>
                </div> 
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /> </div>
                    <div className="about-skill"><p>Responsive Design</p><hr  style={{width:"60%"}} /> </div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>Years Of Experience</p>
               </div>
               <hr />
               <div className="about-achievement">
               <h1>5</h1>
               <p>Projects Completed</p>
               </div>
            </div>
            <hr />
            </div>
    )
}
            
            

        

export default About