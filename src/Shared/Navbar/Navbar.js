import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

import useCollapse from 'react-collapsed'
const Navbar = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()


    const menuItems = <>
        <li><Link to="/home" className='hover:bg-green-100 hover:text-black' >Home</Link></li>
        <li><Link to="/gettingStarted" className='hover:bg-green-100 hover:text-black'>Getting Started</Link></li>
        <li><Link to="/tutorial" className='hover:bg-green-100 hover:text-black'>Tutorial</Link></li>
        <li><Link to="/api" className='hover:bg-green-100 hover:text-black'>API</Link></li>
        <li><Link to="/needHelp" className='hover:bg-green-100 hover:text-black'>Need Help</Link></li>
        <li><Link to="/contactUs" className='hover:bg-green-100 hover:text-black'>Contact Us</Link></li>
        <li><Link to="/login" className='hover:bg-green-100 hover:text-black'>Login</Link></li>
    </>

    const dropdownData = <>
        <div class="collapse collapse-arrow">
            <input type="checkbox" />
            <div class="collapse-title  font-medium ">
                <Link to="/gettingStarted" >Getting Started</Link>
            </div>
            <div class="collapse-content pl-10">
                <p><Link to="/gettingStarted/installation" >Installation</Link></p>
                <p><Link to="/gettingStarted/reduxToolkit" >Why redux Redux toolkit</Link></p>
                <p><Link to="/gettingStarted/coreConcept" >Core Concept</Link></p>
                <p><Link to="/gettingStarted/Resources" >Resources</Link></p>
                <p><Link to="/gettingStarted/example" >Example</Link></p>
            </div>
        </div>
        <div class="collapse collapse-arrow">
            <input type="checkbox" />
            <div class="collapse-title  font-medium ">
                <Link to="/tutorial" >Tutorials</Link>
            </div>
            <div class="collapse-content pl-10">
                <p><Link to="/tutorial/tutorialIndex" >Tutorial index</Link></p>
                <p><Link to="/tutorial/QuickStart" >Quick Start</Link></p>
                <p><Link to="/tutorial/TypeScriptStart" >TypeScript Quick start</Link></p>
                <p><Link to="/tutorial/EssentialRedux" >Essentials of redux</Link></p>
                <p><Link to="/tutorial/Videos" >Videos</Link></p>
            </div>
        </div>



    </>



    return (
        <div className=" fixed z-50 navbar bg-slate-700 text-white px-5">
            <div className="navbar-start">
                <div className="dropdown bg-slate-700 ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg for="my-drawer-2" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="-ml-5 -mt-1 menu menu-compact dropdown-content p-2 shadow bg-slate-700  rounded-box w-52">
                        {dropdownData}
                    </ul>
                </div>

                <Link to="/" className=" normal-case text-xl font-bold ">React Learning</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">

                <button className="btn btn-ghost btn-circle ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>



                <label class="swap swap-rotate pl-4">
                    <input type="checkbox" />
                    <svg class="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                    <svg class="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;