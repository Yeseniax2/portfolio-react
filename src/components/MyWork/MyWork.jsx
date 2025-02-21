import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.png'

const MyWork = () => {
    return (
        <div id='work' className='mywork'>
        <div className='mywork-title'>
    
        <h1>My Latest work</h1>
       </div>
       <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return (
                <a key={index} href={work.w_link} target="_blank" rel="noopener noreferrer">
           <img src={work.w_img} alt="Project Image" />
           
           </a>

            ) 
        })}
       </div> 
       <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />

       </div>


        </div>
    )
}

export default MyWork