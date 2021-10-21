import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenuAction } from '../../../../redux/actions/MenuAction';
import './Header.css';


export default function Header(props) {

    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(toggleMenuAction());
    }


    return (
        <header className="header h-16 flex-shrink-0">
            <div className="container mx-auto flex justify-end items-center">

                
                <button
                    className="toggler flex justify-center items-center  bg-white/25 border border-white/40 shadow rounded-full p-2 h-14 w-14 cursor-pointer z-50"
                    onClick={handleClick}
                >
                    <svg width={30} height={30} viewBox="0 0 30 30" fill="none">
                        <path
                            d="M3.875 15.5H27.125"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.875 7.75H27.125"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.875 23.25H27.125"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>


                </button>
            </div>
        </header>

    )
}
