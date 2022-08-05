import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Tutorial = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content lg:mt-16">
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side  bg-green-50">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 mt-16 overflow-y-auto w-80  text-base-content">
                    <li> <Link to="/tutorial" >Tutorial Index</Link></li>
                    <li> <Link to="/tutorial/quickStart" >Quick Start</Link></li>
                    <li> <Link to="/tutorial/typescriptQuickStart" >TypeScript Quick Start</Link></li>
                    <li> <Link to="/tutorial/reduxEssentials" >Redux Essentials</Link></li>
                    <li> <Link to="/tutorial/videos" >Videos</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Tutorial;