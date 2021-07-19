import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <ul className="menu-links">
                <li className="menu-item active">
                    <NavLink to="/home" className='glass'>
                        <FontAwesomeIcon icon="home" />
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/about" className='glass'>
                        <FontAwesomeIcon icon="user" />
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/portfolio" className='glass'>
                        <FontAwesomeIcon icon="briefcase" />
                    </NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to="/contact" className='glass'>
                        <FontAwesomeIcon icon="envelope" />
                    </NavLink>
                </li>

            </ul>
            <div className="menu-text">
                <h1>Home</h1>
            </div>
            <div className="close-button flex justify-center items-center">
                <FontAwesomeIcon icon="times" />
            </div>

        </div>
    )
}
