import EmailForm from '../EmailForm'
import { useLayoutEffect } from "react";
import "./Contact.css"

const Contact = () => {
    
    useLayoutEffect(() => {
        window.scrollTo(0,0);
    });

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  }

    // const links = document.querySelectorAll('.copy-click');



    // const cls = {
    //     copied: 'is-copied',
    //     hover: 'is-hovered'
    // }

    // const copyToClipboard = str => {
    //     const el = document.createElement('input');

    //     str.dataset.copyString ? el.value = str.dataset.copyString : el.value = str.text;
    //     el.setAttribute('readonly', '');
    //     el.style.position = 'absolute';
    //     el.style.opacity = 0;
    //     document.body.appendChild(el);
    //     el.select();
    //     document.execCommand('copy');
    //     document.body.removeChild(el);
    // }

    // const clickInteraction = (e) => {
    //     e.preventDefault();
    //     copyToClipboard(e.target);
    //     e.target.classList.add(cls.copied);
    //     setTimeout(() => e.target.classList.remove(cls.copied), 1000);
    //     setTimeout(() => e.target.classList.remove(cls.hover), 700);  
    // }

    // Array.from(links).forEach(link => {
    //     link.addEventListener('click', e => clickInteraction(e));
        
    //     link.addEventListener('keypress', e => {
    //         if (e.keyCode === 13) clickInteraction(e);
    //     });

    //     link.addEventListener('mouseover', e => e.target.classList.add(cls.hover));
    //     link.addEventListener('mouseleave', e => {
    //         if (!e.target.classList.contains(cls.copied)) {
    //         e.target.classList.remove(cls.hover); 
    //         }
    //     });
    // });





    return(
        <>
              {copied && <div className="popup">Copied!</div>}

            <div className="content-container" id="contact-container">
                <div className="content-left">
                    <h1 className="content-title"> Contact </h1>
                    <p className="content-description"> Send me a message or find me online, <br /> let me do a favor for you</p>
                    <div className="tag-wrapper">
                        <div className="content-tags flex-child">
                            <div className="label">Email</div>
                            <div className="tags">
                                    danronkam@gmail.com

                            </div>
                        </div>
                        <div className="content-tags flex-child">
                            <div className="label">Phone</div>
                            <div className="tags">808-256-6994</div>
                        </div>
                    </div>
                    <hr />

                    <div className="content-body">
                        <div className="introduction">
                            <h2 className="content-heading"> Dan Online </h2>
                                <ul className="about-list">
                                    <li> <a href="https://linkedin.com/in/danronkam" target="_blank" rel="noreferrer"> 📓  Linkedin </a></li>
                                    <li> <a href="https://github.com/danronkam" target="_blank" rel="noreferrer" > 📓  Github </a></li>
                                    <li> <a href="https://designdk.substack.com" target="_blank" rel="noreferrer"> 📓  Substack </a></li>
                                    <li> <a href="https://medium.com/@danronkam" target="_blank" rel="noreferrer"> 📓  Medium </a></li>
                                </ul>
                            <h2 className="content-heading"> Dan irl </h2>
                                <ul className="about-list">
                                    <li> <a href='https://www.tiktok.com/@doafavorforme' target='_blank' rel="noreferrer"> 📓  Tiktok </a></li>
                                    <li> <a target='_blank' rel="noreferrer" href='https://twitter.com/kamerugh'> 📓  Twitter </a></li>
                                    <li> <a target='_blank' rel="noreferrer" href='https://instagram.com/doafavorforme'> 📓  Instagram </a></li>
                                    <li> <a target='_blank' rel="noreferrer" href='https://medium.com/@danronkam'> 📓  Medium </a></li>
                                </ul>
                        </div>

                    </div>
                </div>
                <div className='content-right'>
                    <EmailForm />
                </div>
            </div>
        </>
    )
}

export default Contact