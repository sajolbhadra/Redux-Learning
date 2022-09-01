import React from 'react';
import { BiCopy } from 'react-icons/bi';
import { FaExclamationCircle, FaHome, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const UsesWithTypeScript = () => {


    const handleCopy = (id) => {
        let div = document.getElementById(id);

        let text = div.innerText;

        navigator.clipboard.writeText(text);
        toast("code copied!");
    };

    const pageIndex =
        <>
            <p className='px-2 py-1'><a href="#abc">Introduction</a></p>
            <p className='px-2 py-1'><a href="#abc">Usage Summary</a></p>
            <p className='px-2 py-1'><a href="#abc">Install Redux Toolkit and React-Redux</a></p>
            <p className='px-2 py-1'><a href="#abc">Create a Redux Store</a></p>
            <p className='px-2 py-1'><a href="#abc">Provide the Redux Store to React</a></p>
            <p className='px-2 py-1'><a href="#abc">Use Redux State and Actions in React Components</a></p>
        </>

    return (
        <div className='leading-relaxed'>
        <div className='grid grid-flow-row-dense grid-cols-10 '>
            <div className='col-span-10 lg:col-span-8 mx-4'>

                {/* breadcrumbs */}
                <div className="text-sm breadcrumbs mt-5">
                    <ul>
                        <li><Link to="/home"><FaHome/></Link></li>
                        <li><Link to="/tutorial">Tutorial</Link></li>
                        <li><span className=' p-[6px] rounded-2xl'>Typescript Quick Start</span></li>
                    </ul>
                </div>

                {/* upside page index collapse for mobile */}
                <div className="collapse collapse-arrow rounded-lg lg:hidden">
                    <input type="checkbox" className='' />
                    <div className="collapse-title bg-green-300 text-black"  >
                        On this page
                    </div>
                    <div className="collapse-content ">
                        {pageIndex}
                    </div>
                </div>

                <h1 className='text-5xl font-bold mb-10 mt-5'>Redux Toolkit TypeScript Quick Start</h1>
                <div className='specialNotesStyle p-5 mb-5 rounded-lg border-l-[6px] border-[#00bf88]'>
                    <h3 className='mb-2 font-bold'><FaLightbulb className='inline text-[22px] mb-[5px]' /> WHAT YOU'LL LEARN</h3>
                    <ul className='list-disc ml-8 mb-5'>
                        <li>How to set up and use Redux Toolkit and React-Redux with TypeScript</li>
                    </ul>
                </div>

                <div className='specialNotesStyle  p-5 mb-5 rounded-lg border-l-[6px] border-[#2a98b9]'>
                    <h3 className='mb-2 font-bold'><FaExclamationCircle className='inline text-[22px] mb-[5px]' /> WHAT YOU'LL LEARN</h3>
                    <ul className="list-disc list-inside pl-4">
                        <li>Knowledge of React Hooks</li>
                        <li>Understanding of Redux terms and concepts</li>
                        <li>Understanding of TypeScript syntax and concepts</li>
                    </ul>
                </div>

                <h2 className='text-4xl font-bold mb-5' id='redux-tutorial'>Introduction</h2>
                <p className='mb-5'>
                    Welcome to the Redux Toolkit TypeScript Quick Start tutorial! This tutorial will briefly show how to use TypeScript with Redux Toolkit.
                </p>


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
                        onClick={() => handleCopy('div')}
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
                        onClick={() => handleCopy('div1')}
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
                        onClick={() => handleCopy('div1')}
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
                        onClick={() => handleCopy('div1')}
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
            </div>

            {/* right side index bar for desktop */}
            <div className='col-span-2 relative hidden lg:block mt-20'>
                <div className='sticky top-[5px] border-l-2 border-gray-300 p-4'>
                    {pageIndex}
                </div>
            </div>
        </div>
    </div>
    );
};

export default UsesWithTypeScript;