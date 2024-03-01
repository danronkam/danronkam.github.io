import emailjs from "@emailjs/browser"
import {useRef} from 'react'


const EmailForm = () => {
    const form = useRef();

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
          <label className="email-label">Name</label>
            <input type="text" name="user_name" />
          <label className="email-label">Email</label>
            <input type="email" name="user_email" />
          <label className="email-label">Message</label>
            <textarea name="message" />
          <input type="submit" value="Send" />
        </form>

      </div>

    );
}

export default EmailForm