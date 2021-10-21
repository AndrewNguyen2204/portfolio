import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button/Button';
import './Home.css';

export default function Home(props) {

    const history = useHistory();


    return (
        <section className="home">
            <div className="home-content">
                <div className="home-text">
                    <p>Hello, I'm</p>
                    <h1>NGUYEN HUU <span>MINH ANH</span></h1>
                    <h2>Front-end Developer</h2>
                    <div className="home-button">
                        <Button
                            onClick={() => {

                                history.push('/about')
                            }}
                            type='btn--glass'
                        >
                            About Me
                        </Button>
                        <Button
                            onClick={() => {

                                history.push('/portfolio')
                            }}
                            type='btn--glass'
                            className="mt-5 sm:mt-0"
                        >
                            Porfolio
                        </Button>
                    </div>
                </div>
                <div className="home-img">
                    <div className="img-box">
                        <img src="./images/IMG_E0025.png" alt="IMG_6739.jpg" />
                    </div>
                </div>
            </div>
        </section>
    )
}
