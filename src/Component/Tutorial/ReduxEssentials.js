import React from 'react';
import { BiHash } from 'react-icons/bi';
import { FaExclamationCircle, FaHashtag, FaHome, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ReduxEssentials = () => {

    const pageIndex =
        <>
            <p className='px-2 py-1'><a href="#abc">Introduction</a></p>
            <p className='px-2 py-1'><a href="#abc">How to Read This Tutorial</a></p>
            <p className='px-2 py-1'><a href="#abc">How to Read This Tutorial</a></p>
            <p className='px-2 py-1'><a href="#abc">When Should I Use Redux?</a></p>
        </>
    return (
        <div className='leading-relaxed'>
            <div className='grid grid-flow-row-dense grid-cols-10'>
                <div className='col-span-10 lg:col-span-8 mx-4'>
                    <div className="text-sm breadcrumbs mt-5">
                        <ul>
                            <li><Link to="/home"><FaHome /></Link></li>
                            <li><Link to="/tutorial">Tutorial</Link></li>
                            <li><span className=' p-[6px] rounded-2xl'>Redux Essential</span></li>
                        </ul>
                    </div>

                    <div className="collapse collapse-arrow rounded-lg lg:hidden">
                        <input type="checkbox" className='' />
                        <div className="collapse-title bg-green-300 text-black" >
                            On this page
                        </div>
                        <div className="collapse-content ">
                            {pageIndex}
                        </div>
                    </div>

                    <h1 className='text-5xl font-bold mb-10 mt-5'>Redux Essentials, Part 1: Redux Overview and Concepts</h1>


                    <div className='specialNotesStyle  p-5 mb-5 rounded-lg border-l-[6px] border-[#00bf88]'>
                        <h3 className='mb-2 font-bold'><FaLightbulb className='inline text-[22px] mb-[5px]' /> WHAT YOU'LL LEARN</h3>
                        <ul className="list-disc list-inside pl-4">
                            <li>What Redux is and why you might want to use it</li>
                            <li>Key Redux terms and concepts</li>
                            <li>How data flows through a Redux app</li>
                        </ul>
                    </div>

                    <h3 id='add-slice-reducer' className='text-3xl font-bold mb-5 group relative'>Introduction <BiHash className='group-hover:inline hidden overflow-clip absolute top-1'></BiHash></h3>
                    <p className='mb-5'>
                        Welcome to the Redux Essentials tutorial! This tutorial will introduce you to Redux and teach you how to use it the right way, using our latest recommended tools and best practices. By the time you finish, you should be able to start building your own Redux applications using the tools and patterns you've learned here.
                    </p>
                    <p className='mb-5'>
                        In Part 1 of this tutorial, we'll cover the key concepts and terms you need to know to use Redux, and in Part 2: Redux App Structure we'll examine a basic React + Redux app to see how the pieces fit together.
                    </p>
                    <p className='mb-5'>
                        Starting in Part 3: Basic Redux Data Flow, we'll use that knowledge to build a small social media feed app with some real-world features, see how those pieces actually work in practice, and talk about some important patterns and guidelines for using Redux.
                    </p>

                    <h3 id='add-slice-reducer' className='text-3xl font-bold mb-5 group relative'>How to Read This Tutorial <BiHash className='group-hover:inline hidden overflow-clip absolute top-1'></BiHash></h3>
                    <p className='mb-5'>
                        This page will focus on showing you how to use Redux the right way, and explain just enough of the concepts so that you can understand how to build Redux apps correctly.
                    </p>


                    <div className='specialNotesStyle p-5 mb-5 rounded-lg border-l-[6px] border-[#2a98b9]'>
                        <h3 className='mb-2 font-bold'><FaExclamationCircle className='inline text-[22px] mb-[5px]' /> WHAT YOU'LL LEARN</h3>
                        <ul className="list-disc list-inside pl-4">
                            <li>Familiarity with HTML &#38; CSS.</li>
                            <li>Familiarity with ES6 syntax and features</li>
                            <li>Knowledge of React terminology: JSX, State, Function Components, Props, and Hooks</li>
                            <li>Knowledge of asynchronous JavaScript and making AJAX requests</li>
                        </ul>
                    </div>
                    <p className='mb-5'>
                        If you're not already comfortable with those topics, we encourage you to take some time to become comfortable with them first, and then come back to learn about Redux. We'll be here when you're ready!
                    </p>
                    <p className='mb-5'>
                        You should make sure that you have the React and Redux DevTools extensions installed in your browser:
                    </p>

                    <ul className="list-disc list-inside pl-4">
                        <li>React DevTools Extension:
                            <ul className='list-[circle] list-inside ml-9'>
                                <li>React DevTools Extension for Chrome</li>
                                <li>React DevTools Extension for Firefox</li>
                            </ul>
                        </li>
                        <li>Redux DevTools Extension:
                            <ul className='list-[circle] list-inside ml-9'>
                                <li>Redux DevTools Extension for Chrome</li>
                                <li>Redux DevTools Extension for Firefox</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 id='add-slice-reducer' className='text-3xl font-bold mb-5 group relative'>What is Redux?<BiHash className='group-hover:inline hidden overflow-clip absolute top-1'></BiHash></h3>
                    <p className='mb-5'>
                        It helps to understand what this "Redux" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?
                    </p>
                    <p className='mb-5'>
                        Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.
                    </p>

                    <h3 id='add-slice-reducer' className='text-3xl font-bold mb-5 group relative'>When Should I Use Redux?<BiHash className='group-hover:inline hidden overflow-clip absolute top-1'></BiHash></h3>
                    <p className='mb-5'>
                        Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.
                    </p>
                    <p className='mb-5'>
                        Redux is more useful when:
                    </p>
                    <ul className="list-disc list-inside pl-4">
                        <li>You have large amounts of application state that are needed in many places in the app</li>
                        <li>The app state is updated frequently over time</li>
                        <li>The logic to update that state may be complex</li>
                        <li>The app has a medium or large-sized codebase, and might be worked on by many people</li>
                    </ul>
                    <p className='mb-5'>
                        Not all apps need Redux. Take some time to think about the kind of app you're building, and decide what tools would be best to help solve the problems you're working on.
                    </p>

                    <div className='specialNotesStyle  p-5 mb-5 rounded-lg border-l-[6px] border-[#2a98b9]'>
                        <h3 className='mb-2 font-bold'><FaExclamationCircle className='inline text-[22px] mb-[5px]' /> WANT TO KNOW MORE?</h3>
                        <p className='mb-5'>
                            If you're not sure whether Redux is a good choice for your app, these resources give some more guidance:
                        </p>
                        <ul className="list-disc list-inside pl-4">
                            <li>When &#40;and when not &#41; to reach for Redux</li>
                            <li>The Tao of Redux, Part 1 - Implementation and Intent</li>
                            <li>Redux FAQ: When should I use Redux?</li>
                            <li>You Might Not Need Redux</li>
                        </ul>
                    </div>



                </div>

                {/* right side index bar for desktop */}
                <div className='col-span-2 relative hidden lg:block'>
                    <div className='sticky top-[5px] border-l-2 border-gray-300 p-4'>
                        {pageIndex}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ReduxEssentials;