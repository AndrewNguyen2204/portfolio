import React, { useState } from 'react';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenuAction } from '../../../../redux/actions/MenuAction';
import { useEffect } from 'react';


const MENU_ITEMS = [

    {
        id: 'home',
        name: 'home',
        url: '/home',
        icon: 'home'
    },
    {
        id: 'about',
        name: 'about',
        url: '/about',
        icon: 'user'
    },
    {
        id: 'portfolio',
        name: 'portfolio',
        url: '/portfolio',
        icon: 'briefcase'
    },
    {
        id: 'contact',
        name: 'contact',
        url: '/contact',
        icon: 'envelope'
    },
];


export default function Menu({ path }) {

    const { open } = useSelector(state => state.MenuReducer);

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {

        let index = MENU_ITEMS.findIndex(item => item.url === path);

        const setDefault = () => {
            const name = index === -1 ? 'home' : MENU_ITEMS[index].name;

            setCurrentPage(name);
        }


        setDefault();
    }, [path])

    const checkOpen = open ? 'open' : '';

    const handleClick = () => {

        dispatch(closeMenuAction());
    }

    const handleChange = (name) => {


        setCurrentPage(name);

    }

    const renderMenuItem = () => {
        return MENU_ITEMS.map(item => {

            let checkActive = '';

            if (path === '/' && item.name === 'home') {
                checkActive = 'active';
            } else {
                checkActive = path === item.url ? 'active' : '';
            }

            return (
                <li
                    key={item.id}
                    className={`menu-item ${checkActive}`}
                    onMouseOver={() => handleChange(item.name)}

                >
                    <NavLink to={item.url} onClick={handleClick}>
                        <FontAwesomeIcon className="hidden sm:inline-block" icon={item.icon} />
                        <span className="">{item.name}</span>
                    </NavLink>
                </li>
            )
        })
    }

    return (
        <div className={`menu ${checkOpen}`}>
            <ul className="menu-items">

                {renderMenuItem()}


            </ul>
            <div className="menu-text">
                <h1 className="capitalize">{currentPage}</h1>
            </div>
            <div className="menu-button flex justify-center items-center" onClick={handleClick}>
                <FontAwesomeIcon icon="times" />
            </div>
        </div>
    )
}
