import React from 'react';
import { Link } from 'react-router-dom';

const Tutorial = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side  bg-green-50">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80  text-base-content">
                    <li> <Link to="/tutorial/tutorialIndex" >Tutorial index</Link></li>
                    <li> <Link to="/tutorial/QuickStart" >Quick Start</Link></li>
                    <li> <Link to="/tutorial/TypeScriptStart" >TypeScript Quick start</Link></li>
                    <li> <Link to="/tutorial/EssentialRedux" >Essentials of redux</Link></li>
                    <li> <Link to="/tutorial/Videos" >Videos</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Tutorial;