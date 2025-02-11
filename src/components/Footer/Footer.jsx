import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a coding ethusiast and a Entry level devloper with a passion for learning and problem-solving. </p>
                    </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter Your Name' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>

                    </div>
                </div>
                <hr/>
                <div className="footer-bottom">
                    <p className="footer-bottom">
                        <p className="footer-bottom-left">© 2024 Yesenia Benitez. All rights reserved.
                        <div className="footer-bottom-right">
                            <p>Term of Services</p>
                            <p>Privacy Policy</p>
                            <p>Connect with Me</p>
                        </div>

                        </p>
                    </p>
            </div>

        </div>
    )
}
export default Footer