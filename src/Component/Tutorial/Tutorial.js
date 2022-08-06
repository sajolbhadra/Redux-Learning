import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Tutorial = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side  bg-green-50">
                <label for="my-drawer-2" className="drawer-overlay"></label>
<<<<<<< HEAD
                <ul className="menu p-4 mt-16 overflow-y-auto w-80  text-base-content">
=======
                <ul className="menu p-4 overflow-y-auto w-64  text-base-content">
>>>>>>> 80a8416c63ddfa3e9e4a3e174163f43c81e41441
                    <li> <Link to="/tutorial" >Tutorial Index</Link></li>
                    <li> <Link to="/tutorial/quickStart" >Quick Start</Link></li>
                    <li> <Link to="/tutorial/typescriptQuickStart" >TypeScript Quick Start</Link></li>
                    <li> <Link to="/tutorial/reduxEssentials" >Redux Essentials</Link></li>
                    {/* <li> <Link to="/tutorial/videos" >Videos</Link></li> */}
                </ul>

            </div>
        </div>
    );
};

export default Tutorial;