import emailjs from "@emailjs/browser"
import {useRef, useState} from 'react'
import './EmailForm.css'


const EmailForm = () => {
    const form = useRef();

    const [emailSent, setEmailSent] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_rh365cx', 'template_bx1or3b', form.current, {
          publicKey: 'sjUuLQ_EtHb1bpf5D',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <div className="email-container">
        <form ref={form} onSubmit={sendEmail} className="email-form">
          <label className="email-label">
            <h2 className="content-heading">
              Name
            </h2>
          </label>
            <input type="text" name="user_name" className="email-input"/>
          <label className="email-label">
            <h2 className="content-heading">
              Email
            </h2>
          </label>
            <input type="email" name="user_email" className="email-input"/>
          <label className="email-label">
            <h2 className="content-heading">
              Message
            </h2>
          </label>
            <textarea name="message" />
            <br />
          <input type="submit" value="Send" />
        </form>

      </div>

    );
}

export default EmailForm