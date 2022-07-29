import React from 'react';
import { BiCopy } from 'react-icons/bi';
import { FaHome, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const QuickStart = () => {
    const handleCopy = (id) => {
        let div = document.getElementById(id);
    
        let text = div.innerText;
    
        navigator.clipboard.writeText(text);
        // toast("code copied!");
      };
    return (
        <div className='leading-relaxed'>
            <div className='grid grid-flow-row-dense grid-cols-10'>
                <div className='col-span-8 mx-4'>
                    <div class="text-sm breadcrumbs mt-5">
                        <ul>
                            <li><Link to="/home"><FaHome /></Link></li>
                            <li><Link to="/tutorial">Tutorial</Link></li>
                            <li><span className='bg-gray-100 p-[6px] rounded-2xl'>Quick Start</span></li>
                        </ul>
                    </div>
                    <h1 className='text-5xl font-bold mb-10 mt-5'>Redux Toolkit Quick Start</h1>
                    <div className='bg-green-50 p-5 mb-5 rounded-lg border-l-[6px] border-green-400'>
                        <h3 className='mb-2 font-bold'><FaLightbulb className='inline text-[22px] mb-[5px]' /> WHAT YOU'LL LEARN</h3>
                        <p>How to set up and use Redux Toolkit with React-Redux</p>
                    </div>

                    <div className='bg-blue-50 p-5 mb-5 rounded-lg border-l-[6px] border-blue-400'>
                        <h3 className='mb-2 font-bold'><FaLightbulb className='inline text-[22px] mb-[5px]' /> WHAT YOU'LL LEARN</h3>
                        <p>How to set up and use Redux Toolkit with React-Redux</p>
                        <p>Knowledge of React terminology: JSX, State, Function Components, Props, and Hooks</p>
                        <p>Understanding of Redux terms and concepts</p>
                    </div>

                    <h2 className='text-4xl font-bold mb-5' id='redux-tutorial'>Introduction</h2>
                    <p className='mb-5'>
                        Welcome to the Redux Toolkit Quick Start tutorial! This tutorial will briefly introduce you to Redux Toolkit and teach you how to start using it correctly.
                    </p>

                    <h3 className='text-3xl font-bold mb-5'>How to Read This Tutorial</h3>
                    <p className='mb-5'>
                        This page will focus on just how to set up a Redux application with Redux Toolkit and the main APIs you'll use. For explanations of what Redux is, how it works, and full examples of how to use Redux Toolkit, see the tutorials linked in the "Tutorials Index" page.
                    </p>
                    <p className='mb-5'>
                        For this tutorial, we assume that you're using Redux Toolkit with React, but you can also use it with other UI layers as well. The examples are based on a typical Create-React-App folder structure where all the application code is in a src, but the patterns can be adapted to whatever project or folder setup you're using.
                    </p>
                    <p className='mb-5'>
                        The Redux+JS template for Create-React-App comes with this same project setup already configured.
                    </p>

                    <h2 className='text-4xl font-bold mb-5' id='redux-tutorial'>Usage Summary</h2>
                    <h3 className='text-3xl font-bold mb-5'>Install Redux Toolkit and React-Redux</h3>
                    <p className='mb-5'>
                        Add the Redux Toolkit and React-Redux packages to your project:
                    </p>

                    <div className="bg-black group text-white my-3 p-3 rounded relative">
                        <p
                            onClick={()=>handleCopy('div')}
                            className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
                        >
                            <BiCopy />
                        </p>
                        <p id="div">
                            <span className="text-yellow-500">npm install</span>{" "}
                            @reduxjs/toolkit react-redux
                        </p>
                    </div>

                    <h3 className='text-3xl font-bold mb-5'>Create a Redux Store</h3>
                    <p className='mb-5'>
                    Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:
                    </p>
                    <div className="bg-black group text-white my-3 rounded relative">
                        <p className='px-3'>app/store.js</p>
                        <div className="border-b-[1px] border-white mt-1"></div> 
                        <p
                            onClick={()=>handleCopy('div1')}
                            className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
                        >
                            <BiCopy />
                        </p>
                        <p id="div1" className='px-3'>
                        import &#123; configureStore &#125; from '@reduxjs/toolkit' <br />
                        export default configureStore&#40;&#123; <br />
                        reducer: &#123;&#125; <br />
                        &#125;&#41;	
                        </p>
                    </div>

                    <p className='mb-5'>
                    This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
                    </p>

                    <h3 className='text-3xl font-bold mb-5'>Provide the Redux Store to React</h3>
                    <p className='mb-5'>
                    Once the store is created, we can make it available to our React components by putting a React-Redux &#60;Provider&#62; around our application in src/index.js. Import the Redux store we just created, put a &#60;Provider&#62; around your &#60;App&#62;, and pass the store as a prop:
                    </p>

                    <div className="bg-black group text-white my-3 rounded relative">
                        <p className='px-3'>app/store.js</p>
                        <div className="border-b-[1px] border-white mt-1"></div> 
                        <p
                            onClick={()=>handleCopy('div1')}
                            className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
                        >
                            <BiCopy />
                        </p>
                        <p id="div1" className='px-3'>
                        import &#123; configureStore &#125; from '@reduxjs/toolkit' <br />
                        export default configureStore&#40;&#123; <br />
                        reducer: &#123;&#125; <br />
                        &#125;&#41;	
                        </p>
                    </div>
                    <h3 className='text-3xl font-bold mb-5'>Use Redux State and Actions in React Components</h3>
                    <p className='mb-5'>
                    Once the store is created, we can make it available to our React components by putting a React-Redux &#60;Provider&#62; around our application in src/index.js. Import the Redux store we just created, put a &#60;Provider&#62; around your &#60;App&#62;, and pass the store as a prop:
                    </p>

                    <div className="bg-black group text-white my-3 rounded relative">
                        <p className='px-3'>app/store.js</p>
                        <div className="border-b-[1px] border-white mt-1"></div> 
                        <p
                            onClick={()=>handleCopy('div1')}
                            className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
                        >
                            <BiCopy />
                        </p>
                        <p id="div1" className='px-3'>
                        import &#123; configureStore &#125; from '@reduxjs/toolkit' <br />
                        export default configureStore&#40;&#123; <br />
                        reducer: &#123;&#125; <br />
                        &#125;&#41;	
                        </p>
                    </div>
                    <div className='flex items-center justify-center my-10'>
                        <button class="btn btn-wide">Start Quiz</button>
                    </div>
                </div>
                <div className='col-span-2 relative'>
                    <div className='fixed top-[100px] border-l-2 border-gray-300 p-4'>
                        <a href="#redux-tutorial">Redux Official Tutorials</a> <br />
                        <a href="#additional-resource">Additional Resources</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickStart;