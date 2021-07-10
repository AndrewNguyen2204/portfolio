import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Header() {
    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800">
            <div className="container flex justify-between h-16 mx-auto">
                <div className="flex">
                    <NavLink to='/home' className="flex items-center p-2">
                        <img src="./images/logo.png" alt='logo' />
                    </NavLink>

                </div>

                <button className="p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-purple-700">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
