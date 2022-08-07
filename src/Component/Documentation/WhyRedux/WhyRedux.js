import React from 'react';
import { BiCopy } from 'react-icons/bi';
import { FaExclamationCircle, FaHome, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhyRedux = () => {
    return (
        <div className="ml-4 mx-4 lg:mr-60">
            <div class="text-sm breadcrumbs mt-5">
                        <ul>
                            <li><Link to="/home"><FaHome /></Link></li>
                            <li><Link to="/gettingStarted">Getting Started</Link></li>
                            <li><span className=' p-[6px] rounded-2xl'>Why redux toolkit</span></li>
                        </ul>
                    </div>
            <div>
                <p className="text-4xl font-bold">Why Redux Toolkit and How To Use Redux Today </p>
                <p className="text-2xl font-bold">What is Redux Toolkit?</p>

                <p className="mt-3 text-lg">
                    Redux Toolkit (also known as "RTK" for short) is our official recommended approach for writing Redux logic. The @reduxjs/toolkit package wraps around the core redux package, and contains API methods and common dependencies that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.
                </p>
            </div>
            <div>
                <p className="text-4xl font-bold my-6">How Redux Toolkit is Different Than the Redux Core</p>
                <p className="text-2xl font-bold">What is "Redux"?</p>
                <p className="mt-3 text-lg">

                    The first thing to ask is, "what is Redux?"
                </p>
                <p className="mt-3 text-lg">

                    Redux is really:
                </p>
                <p className="mt-3 text-lg">
                    A single store containing "global" state <br />
                    Dispatching plain object actions to the store when something happens in the app <br />
                    Pure reducer functions looking at those actions and returning immutably updated state <br />
                </p>
                <p className="mt-3 text-lg">
                    RTK includes utilities that help simplify many common use cases,
                    including{" "}
                    <a
                        className="linkColor hover:underline"
                        href="https://reactjs.org/"
                    >
                        store setup
                    </a>
                    ,{" "}
                    <a
                        className="linkColor hover:underline"
                        href="https://reactjs.org/"
                    >
                        creating reducers and writing immutable update logic
                    </a>{" "}
                    , and even{" "}
                    <a
                        className="linkColor hover:underline"
                        href="https://reactjs.org/"
                    >
                        creating entire "slices" of state at once.
                    </a>
                </p>
                <p className="mt-3 text-lg">
                    Whether you're a brand new Redux user setting up your first project,
                    or an experienced user who wants to simplify an existing application,{" "}
                    <a
                        className="linkColor font-bold hover:underline"
                        href="https://reactjs.org/"
                    >
                        Redux Toolkit
                    </a>{" "}
                    can help you make your Redux code better.
                </p>
                <p className="mt-3 text-lg">
                    Redux Toolkit is available as a package on NPM for use with a module
                    bundler or in a Node application:
                </p>
                <div className="bg-black group text-white my-3 p-3 relative">
                    <p
                        // onClick={handleCopyNpm}
                        className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
                    >
                        <BiCopy />
                    </p>
                    <p># NPM</p>
                    <p id="div">
                        <span className="text-yellow-500">
                        const ADD_TODO = 'ADD_TODO'
                        const TODO_TOGGLED = 'TODO_TOGGLED'

                            </span>{" "}
                        @reduxjs/toolkit
                    </p>
                </div>
                <div className="bg-black group text-white my-3 p-3 relative">
                    <p
                        // onClick={handleCopyYarn}
                        className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
                    >
                        <BiCopy />
                    </p>
                    <p># Yarn</p>
                    <p id="yarn">
                        <span className="text-yellow-500">yarn add</span> @reduxjs/toolkit
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyRedux;