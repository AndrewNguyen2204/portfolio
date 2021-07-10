import React from 'react';
import './About.css';
export default function About(props) {
    return (
        <div className="about container mx-auto">
            <div className="row">
                <div className="page-title">
                    <h2>about</h2>
                </div>
            </div>
            <div className="row">
                <div className="about-img w-1/2">
                    <div className="img-box">
                        <img src="./images/IMG_E0025.jpg" alt="about-image" />
                    </div>
                </div>
                <div className="about-text w-1/2">
                    <p>Summary templates allow anyone to quickly create outlines and abridgments of lengthy tomes, books, research studies, business financial information, contracts, and other sources of lengthy pieces of information. So if you want more downloadable examples and more information on how to create and use printable summary templates, read the rest of this article and be enlightened</p>
                    <h3>Skills</h3>
                    <div className="skills row">
                        <div className="skill-item">html</div>
                        <div className="skill-item">css</div>
                        <div className="skill-item">javascript</div>
                        <div className="skill-item">Sass/Scss</div>
                        <div className="skill-item">ReactJs</div>

                    </div>
                </div>
            </div>

        </div>
    )
}
