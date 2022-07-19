import React from 'react';
import { Link } from 'react-router-dom';

const GettingStarted = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div class="drawer-side  bg-green-50">
                <label for="my-drawer-2" class="drawer-overlay "></label>
                <ul class="menu p-4 overflow-y-auto w-80  text-base-content">
                    <li><Link to="/gettingStarted/installation" >Installation</Link></li>
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