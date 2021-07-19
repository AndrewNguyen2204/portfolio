import React from 'react';
import './Contact.css';
export default function Contact(props) {
    return (
        <div className="contact container mx-auto">
            <div className="row">
                <div className="page-title">
                    <h2>contact</h2>
                </div>
            </div>
            <div className="row">
                <div className="form-box w-1/2 p-5">
                    <div className="input-group">
                        <input type='text' placeholder="Name" className="input-control w-full p-2 rounded-md bg-white bg-opacity-25" />
                    </div>
                    <div className="input-group">
                        <input type='email' placeholder="Email" className="input-control w-full p-2 rounded-md bg-white bg-opacity-25" />
                    </div>
                    <div className="input-group">
                        <input type='text' placeholder="name" className="input-control w-full p-2 rounded-md bg-white bg-opacity-25" />
                    </div>
                    <div className="input-group">
                        <textarea placeholder="Message" className="input-control w-full p-2 rounded-md bg-white bg-opacity-25" />
                    </div>
                </div>
                <div className="contact-info w-1/2  p-5 ">
                    <div className="contact-info-item">
                        <h3>email</h3>
                        <p>anhnhm.job@gmail.com</p>
                    </div>
                    <div className="contact-info-item">
                        <h3>phone</h3>
                        <p>0905098925</p>
                    </div>
                    <div className="contact-info-item">
                        <h3>follow me</h3>
                        <div className="social-links">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
