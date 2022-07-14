
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Location from "../../img/location.png"
import { useContext, useRef } from "react"
import emailjs from '@emailjs/browser';
import { useState } from "react"
import { ThemeContext } from "../../context"


function Contact() {
    const formRef = useRef();

    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e)=>{
        //when we accedently click on submit button it should not refresh the page
        e.preventDefault();

        emailjs.sendForm('service_2uasjyr', 'template_mf2p7gw', formRef.current, 'zTIK6dMdk1M7ZiGd9')
      .then((result) => {
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let discuss about Project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon"/>+91 9765065077
                        </div>

                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />az09pravi@gmail.com
                          
                        </div>

                        <div className="c-info-item">
                            <img src={Location} alt="" className="c-icon" />Mg road, karjat 414402, Maharastra India
                        </div>

                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> get in touch. Always available for freelancing if the right project comes along me
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} >
                        <input style={{backgroundColor:darkMode && "#333" ,color:darkMode&&"white"}} type="text" placeholder='name' name='user_name' />
                        <input style={{backgroundColor:darkMode && "#333",color:darkMode&&"white" }} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor:darkMode && "#333",color:darkMode&&"white"}} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor:darkMode && "#333" , color:darkMode&&"white"}} name="message" rows="5" placeholder='Message'></textarea>

                        <button style={{backgroundColor:darkMode && "gray" }}>Submit</button>
                        {done && "....thank you....."}
                        


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
