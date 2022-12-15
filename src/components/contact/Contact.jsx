import React, { useRef } from 'react'
import "./Contact.css";
import emailjs from "emailjs-com"
import {MdOutlineEmail} from "react-icons/md"
import {AiOutlineMessage} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_otn2g6t', 'template_4m93yfd', form.current, 'ffCGrdx6k4iqubs9w')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contect Me</h2>
      <div className="container con_cnt">
        <div className="con_options">
          <article className='cont_option'>
            <MdOutlineEmail className='cont_icon'/>
            <h4>Email</h4>
            <h5>singhchandan1185073@gmail.com</h5>
            <a href="mailto:singhchandan1185073@gmail.com" target="_blank">Semd a Message</a>
          </article>
          <article className='cont_option'>
            <AiOutlineMessage className='cont_icon'/>
            <h4>Instagram Id</h4>
            <h5>chandan_3singh</h5>
            <a href="" target="_blank">Semd a Message</a>
          </article>
          <article className='cont_option'>
            <BsWhatsapp className='cont_icon'/>
            <h4>WhatsApp</h4>
            <h5>123567456</h5>
            <a href="https://api.whatsapp.com/send?phone=+918368701991" target="_blank">Semd a Message</a>
          </article>
        </div>
        {/* End of contect option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact