import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Header() {
    return (
        <header className="p-4 my-10">
            <div className="container flex justify-between h-16 mx-auto">
                <div className="flex justify-center items-center bg-white bg-opacity-25 rounded-full p-2 h-20 w-20">
                    <NavLink to="/home" className="flex  bg-white bg-opacity-25 rounded-full">
                        <img src="./images/logo.png" alt='logo' />
                    </NavLink>

                </div>

                <NavLink to="/menu" className="flex justify-center items-center  bg-white bg-opacity-25 rounded-full p-2 h-12 w-12 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </NavLink>
            </div>
        </header>

    )
}
