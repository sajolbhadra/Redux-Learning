import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const GettingStarted = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side  bg-green-50">
                <label for="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-80 pt-20  text-base-content">
                    <li><Link to="/gettingStarted" >Installation</Link></li>
                    <li><Link to="/gettingStarted/reduxToolkit" >Why redux Redux toolkit</Link></li>
                    <li><Link to="/gettingStarted/coreConcept" >Core Concept</Link></li>
                    <li><Link to="/gettingStarted/Resources" >Resources</Link></li>
                    <li><Link to="/gettingStarted/example" >Example</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default GettingStarted;