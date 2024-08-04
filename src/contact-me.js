import React, { useState } from 'react';
// import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Typewriter from 'typewriter-effect';
import { useDarkMode } from './dark-mode';



function ContactMe() {
    const { isDarkMode } = useDarkMode();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h8hz5vw', 'template_42pu8vn', e.target, '92R47Yr9OgyVk51aj')
            .then((result) => {
                console.log(result.text);
                alert('Thank you for contacting. The message was sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again later.');
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div id="Contact-Me-stage">
            <div className={`Contact-Me${isDarkMode ? ' dark-mode' : ''}`}>

                <div className="social-card">
                    <div className="social-header">
                        <div className="social-top">
                            <div className="social-circle">
                                <span className="social-red social-circle2"></span>
                            </div>
                            <div className="social-circle">
                                <span className="social-yellow social-circle2"></span>
                            </div>
                            <div className="social-circle">
                                <span className="social-green social-circle2"></span>
                            </div>

                            <p id="Contact-Me-title">connect_with_me</p>

                        </div>
                    </div>
                    <div className="social-code-container">
                        <div readonly="" name="code" id="social-code">
                            <h3>
                                <Typewriter
                                    options={{
                                        strings: ["Let's Connect!", "Looking forward to hear from you!"],
                                        autoStart: true,
                                        loop: true,
                                        delay: 50
                                    }}
                                />
                            </h3>

                            <p>Connect at <a href='mailto:manas.gowda04@gmail.com'>manas.gowda04@gmail.com</a></p>


                            <div className="icon">
                                {/* <!-- GitHub Button --> */}
                                <a href="https://github.com/manas-1404" className="btn-social" target="_blank" rel="noopener noreferrer">
                                    <svg width="75" height="75" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
                                        <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                                    </svg>
                                </a>

                                {/* <!-- LinkedIn Button --> */}
                                <a href="https://www.linkedin.com/in/manas-gowda/" className="btn-social" target="_blank" rel="noopener noreferrer">
                                    <svg width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20.447,20.452h-3.554v-5.569c0-1.328-0.027-3.037-1.852-3.037-1.853,0-2.136,1.445-2.136,2.939v5.667H9.351V9h3.414v1.561h0.049c0.477-0.902,1.637-1.852,3.37-1.852,3.601,0,4.267,2.37,4.267,5.455v6.288H20.447z M5.337,7.433c-1.144,0-2.063-0.927-2.063-2.065c0-1.138,0.919-2.063,2.063-2.063s2.065,0.925,2.065,2.063 C7.402,6.506,6.481,7.433,5.337,7.433z M7.119,20.452H3.554v-11h3.565V20.452z M22.225,0H1.771C0.792,0,0,0.795,0,1.778v20.447 C0,23.207,0.792,24,1.771,24h20.454c0.978,0,1.771-0.793,1.771-1.775V1.778C24,0.795,23.203,0,22.225,0z" />
                                    </svg>
                                </a>

                                {/* Resume Button */}
                                <a href="https://drive.google.com/file/d/1lBZEPW5pCB75ekDeMvzazDI5wLTtUUiJ/view?usp=drive_link" className="btn-social" target="_blank" rel="noopener noreferrer">
                                    <svg width="75" height="75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-7V3.5L18.5 9H13z" />
                                    </svg>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="social-card">
                    <div className="social-header">
                        <div className="social-top">
                            <div className="social-circle">
                                <span className="social-red social-circle2"></span>
                            </div>
                            <div className="social-circle">
                                <span className="social-yellow social-circle2"></span>
                            </div>
                            <div className="social-circle">
                                <span className="social-green social-circle2"></span>
                            </div>

                            <p id="Contact-Me-title">Contact Me</p>

                        </div>
                    </div>
                    <div className="social-code-container">
                        <div readonly="" name="code" id="social-code">

                            {/* Email form */}

                            <form className="form-container" onSubmit={handleSubmit}>
                                <div className='form-field'>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Name'
                                        id="name_input"
                                        className='form-input'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='form-field'>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        className='form-input'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='form-field'>
                                    <textarea
                                        name="message"
                                        placeholder='Message'
                                        className='message-field'
                                        rows={10}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" value="Send" id="send-button">Send</button>
                            </form>

                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default ContactMe;