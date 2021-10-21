import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import './About.css';
export default function About(props) {


    const history = useHistory();

    return (
        <div className="about container mx-auto flex-1">
            <div className="row">
                <div className="page-title mt-10">
                    <h2>about me</h2>
                </div>
            </div>
            <div className="row">
                <div className="about-img w-full lg:w-1/2 hidden sm:block">
                    <div className="img-box">
                        <img src="./images/IMG_E0025.png" alt="avatar" />
                    </div>
                </div>
                <div className="about-text w-full lg:w-1/2 mt-10 lg:mt-0">
                    <p className="break-word text-justify">Summary templates allow anyone to quickly create outlines and abridgments of lengthy tomes, books, research studies, business financial information, contracts, and other sources of lengthy pieces of information. So if you want more downloadable examples and more information on how to create and use printable summary templates, read the rest of this article and be enlightened</p>
                    <h3 className="font-semibold">Skills</h3>
                    <div className="skills row">
                        <div className="skill-item">html</div>
                        <div className="skill-item">css</div>
                        <div className="skill-item">javascript</div>
                        <div className="skill-item">Sass/Scss</div>
                        <div className="skill-item">ReactJs</div>

                    </div>
                    <div className="about-button row mt-5">
                        <Button type='btn--glass'>download cv</Button>
                        <Button 
                        type='btn--glass'
                        onClick={()=>{
                            history.push('/portfolio');
                        }}
                        >
                            portfolio
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
