import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import TiltBox from '../../components/TiltBox/TiltBox';
import './About.css';
import { SOCIAL_LINKS } from '../Home/SOCIAL_LINKS';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const options = {
    scale: 1.1,
    speed: 500,
    max: 30,
    glare: true,
    "max-glare": 1
}


export default function About(props) {


    const history = useHistory();



    const renderSocialLinks = () => {
        return SOCIAL_LINKS.map(link => {
            return (
                <a key={link.key} href={link.href} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={link.icon} /></a>

            )
        })
    }




    return (
        <div className="about container mx-auto flex-1 fade-in">
            <div className="row">
                <div className="page-title">
                    <h2>about me</h2>
                </div>
            </div>
            <div className="row">
                <div className="about-img w-full lg:w-1/2 hidden sm:block mb-10">
                    <TiltBox className="img-box" options={options}>
                        <div className="box-content">
                            <h3 className="text-2xl uppercase text-center text-white"><span className="font-thin">Nguyen Huu</span> Minh Anh</h3>

                            <p className="text-white text-center">Frontend developer</p>

                            <div className="social-links">

                                {renderSocialLinks()}


                            </div>

                        </div>
                        <img src="./images/IMG_E0025.png" alt="IMG_6739.jpg" />


                    </TiltBox>
                </div>
                <div className="about-text w-full lg:w-1/2">
                    <p className="break-word text-justify">

                        I'm a web developer, doing mainly front-end, passionate about CSS, animations, and creative coding. I have an entrepreneurial mindset, a pathological curiosity about new technologies, and a constant desire to learn new things makes…

                        <br />

                        Professional, creativity, responsible, self-discipline and ability to work hard under high pressure with 7+ years of experience working in the customer service of many different banks.
                    </p>

                    <h3 className="font-semibold">Skills</h3>
                    <div className="skills row">
                        <div className="skill-item">html</div>
                        <div className="skill-item">css</div>
                        <div className="skill-item">javascript</div>
                        <div className="skill-item">Sass/Scss</div>
                        <div className="skill-item">ReactJs</div>

                    </div>
                    <div className="about-button row mt-5">
                        <Button type='btn--glass'>

                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://drive.google.com/file/d/1pTZGk8nCzVpFwp__So9vR9RiDi5ugyWX/view?usp=sharing"
                                download
                            >
                                download cv
                            </a>

                        </Button>
                        <Button
                            type='btn--glass'
                            onClick={() => {
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
