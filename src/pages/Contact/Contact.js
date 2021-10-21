import React from 'react';
import './Contact.css';
import Button from '../../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Contact(props) {
    return (
        <div className="contact container mx-auto flex-1">

            <div className="page-title">
                <h2 className="mt-10">contact</h2>
            </div>

            <div className="row">
                <div className="contact-form w-full md:w-1/2 p-5">
                    <form>
                        <div className="input-group">
                            <input type='text' placeholder="Name" className="input-control" />
                        </div>
                        <div className="input-group">
                            <input type='email' placeholder="Email" className="input-control" />
                        </div>
                        <div className="input-group">
                            <input type='text' placeholder="Subject" className="input-control" />
                        </div>
                        <div className="input-group">
                            <textarea placeholder="Message" className="input-control" />
                        </div>
                        <div className="form-button">
                            <Button>send message</Button>
                        </div>
                    </form>
                </div>
                <div className="contact-info w-full md:w-1/2  p-5 ">
                    <div className="contact-info-item">
                        <h3>email</h3>
                        <p>anhnhm.job@gmail.com</p>
                    </div>
                    <div className="contact-info-item">
                        <h3>phone</h3>
                        <p>+84 905 098 925</p>
                    </div>
                    <div className="contact-info-item">
                        <h3>follow me</h3>
                        <div className="social-links">
                            
                            <a href="/"><FontAwesomeIcon icon={['fab', "facebook-f"]} /></a>
                            <a href="/"><FontAwesomeIcon icon={['fab', "instagram"]} /></a>
                            <a href="/"><FontAwesomeIcon icon={['fab', "codepen"]} /></a>
                            <a href="/"><FontAwesomeIcon icon={['fab', "twitter"]} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
