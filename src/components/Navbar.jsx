import React from 'react';
import navLogo from '../assets/Logo.png'
const Navbar = () => {
    return (
        <nav className='px-20'>
            <div className="navbar  shadow-sm bg-base-100  text-white">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">
                        <img src={navLogo} alt="navbar logo" />
                    </a>
                </div>
                <div className="navbar-center gap-6 bg-gray-800 p-4 rounded-2xl">
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='hover:bg-gray-600 p-2 text-sm rounded-xl'>Home</a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='hover:bg-gray-600 p-2 text-sm rounded-xl'>Movies & Shows</a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='hover:bg-gray-600 p-2 text-sm rounded-xl'>Support</a>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='hover:bg-gray-600 p-2 text-sm rounded-xl'>Subscriptions</a>
                </div>

                <div className="navbar-end ">
                    <button className="btn btn-ghost btn-circle  hover:bg-gray-600 p-2 text-sm rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                    </button>
                    <button className="btn btn-ghost btn-circle hover:bg-gray-600 p-2 text-sm rounded-xl">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;