import emailjs from "@emailjs/browser"
import {useRef, useState } from 'react'
import './EmailForm.css'


const EmailForm = () => {
    const form = useRef();

    const sendEmai! = (e) => {
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

    const [notification, setNotification] = useState({ message: '', type: '' });

    const sendEmai1 = () => {
      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { /* Email parameters */ }, 'YOUR_USER_ID')
        .then((response) => {
          console.log('Email sent:', response);
          setNotification({ message: 'Email sent successfully!', type: 'success' });
        })
        .catch((error) => {
          console.error('Email send error:', error);
          setNotification({ message: 'Failed to send email.', type: 'error' });
        });
    };
  
  
    return (
      <div className="email-container">
        <form ref={form} onSubmit={sendEmail} className="email-form">
          <label className="email-label">
            <h2 className="content-heading email-label">
              Name
            </h2>
          </label>
            <input type="text" name="user_name" className="email-input"/>
          <label className="email-label">
            <h2 className="content-heading email-label">
              Email
            </h2>
          </label>
            <input type="email" name="user_email" className="email-input"/>
          <label className="email-label">
            <h2 className="content-heading email-label">
              Message
            </h2>
          </label>
            <textarea name="message" className="email-textArea" maxLength="250"/>
            <br />
          <input type="submit" value="Send" className="email-submit"/>
        </form>

      </div>

    );
}

export default EmailForm