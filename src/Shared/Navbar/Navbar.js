import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom'
import auth from '../../firebase/firebase.init';
import './Navbar.css'
import { FaLogOut } from "react-icons/fa";

const Navbar = () => {
    const [user] = useAuthState(auth)

    // showing method for user name character in nav bar 
    const name = user?.email;
    var shortName;
    if (name) {
        shortName = name.substr(0, 2).toUpperCase();
    }

    // sign out
    const handleSignOut = () => {
        signOut(auth)
    }


    const menuItems = <>
        <li><Link to="/home" className='hover:bg-green-100 hover:text-black' >Home</Link></li>
        <li><Link to="/gettingStarted" className='hover:bg-green-100 hover:text-black'>Getting Started</Link></li>
        <li><Link to="/tutorial" className='hover:bg-green-100 hover:text-black'>Tutorial</Link></li>
        <li><Link to="/api" className='hover:bg-green-100 hover:text-black'>API</Link></li>
        <li><Link to="/needHelp" className='hover:bg-green-100 hover:text-black'>Need Help</Link></li>
        <li><Link to="/contactUs" className='hover:bg-green-100 hover:text-black'>Contact Us</Link></li>
        <li><Link to="/admin" className='hover:bg-green-100 hover:text-black'>Admin</Link></li>
        {
            !user && <li><Link to="/login" className='hover:bg-green-100 hover:text-black'>Login</Link></li>
        }
    </>

    const dropdownData = <>
        <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title  font-medium ">
                <Link to="/gettingStarted" >Getting Started</Link>
            </div>
            <div className="collapse-content pl-10">
                <p><Link to="/gettingStarted/installation" >Installation</Link></p>
                <p><Link to="/gettingStarted/reduxToolkit" >Why redux Redux toolkit</Link></p>
                <p><Link to="/gettingStarted/coreConcept" >Core Concept</Link></p>
                <p><Link to="/gettingStarted/Resources" >Resources</Link></p>
                <p><Link to="/gettingStarted/example" >Example</Link></p>
            </div>
        </div>
        <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title  font-medium ">
                <Link to="/tutorial" >Tutorials</Link>
            </div>
            <div className="collapse-content pl-10">
                <p><Link to="/tutorial/tutorialIndex" >Tutorial index</Link></p>
                <p><Link to="/tutorial/QuickStart" >Quick Start</Link></p>
                <p><Link to="/tutorial/TypeScriptStart" >TypeScript Quick start</Link></p>
                <p><Link to="/tutorial/EssentialRedux" >Essentials of redux</Link></p>
                <p><Link to="/tutorial/Videos" >Videos</Link></p>
            </div>
        </div>
        <div>
            <Link className='collapse-title font-medium' to="/login" >Login</Link>
        </div>



    </>



    return (
        <div className=" fixed z-50 navbar bg-slate-700 text-white px-5">
            <div className="navbar-start">
                <div className="dropdown bg-slate-700 ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="-ml-5 menu menu-compact dropdown-content p-2 shadow bg-slate-700  rounded-box w-52">
                        {dropdownData}
                    </ul>
                </div>

                <Link to="/" className=" normal-case text-xl font-bold ">Redux Learning</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">

                <button className="btn btn-ghost btn-circle ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>



                <label className="swap swap-rotate pl-4">
                    <input type="checkbox" />
                    <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                    <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label>
                {
                    user && <div className="dropdown dropdown-end">
                        {/* <label tabIndex="0" className="btn btn-primary ring ring-white rounded-full ml-4">{name}</label> */}
                        <label tabIndex="0" className="avatar placeholder ml-4 cursor-pointer">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                                <span className="text-xl text-white font-medium">{shortName}</span>
                            </div>
                        </label>

                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-slate-700 rounded-box w-52">
                            <li><Link to='/profile'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>Profile</Link></li>

                            <li><Link to='/profile'> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>Leader Board</Link></li>

                            <li><button onClick={handleSignOut}> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg> Logout</button></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;