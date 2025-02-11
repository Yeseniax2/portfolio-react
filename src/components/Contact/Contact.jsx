import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.png'
import call_icon from '../../assets/call_icon.png'
import location_icon from '../../assets/location_icon.png'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "af79bcc7-74a1-4796-b440-36e590afe21a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };



    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
        </div>
       <div className="contact-section">
        <div className="contact-left">
           <h1>Let's Talk</h1> 
           <p>I'm open to take on new projects, feel free to to reach out</p>
           <div className="contact-details">
            <div className="contact-detail">
               <img src ={mail_icon} alt="" /> <p>yeseniab743@gmail.com</p>
            </div>
            
            <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>407-693-1515</p>
               </div>
                
                <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Florida</p>

                </div>

           </div>
        </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message"  rows="8" placeholder='Enter Your Message'></textarea>
                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
       </div>
        </div>
    )
}

export default Contact