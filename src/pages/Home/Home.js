import React from 'react';
import './Home.css';

export default function Home(props) {
    return (
        <div className="home container mx-auto flex justify-center items-center ">
            <div className="home-content w-full flex">
                <div className="home-text w-1/2 flex flex-col justify-center">
                    <p>Hello, I'm</p>
                    <h1>NGUYEN HUU <span>MINH ANH</span></h1>
                    <h2>Front-end Developer</h2>
                    <div className="home-button">
                        <button>About Me</button>
                        <button>Porfolio</button>
                    </div>
                </div>
                <div className="home-img  w-1/2 h-full">
                    <div className="img-box mx-auto">
                        <img src="./images/IMG_6739.jpg" alt="IMG_6739.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
