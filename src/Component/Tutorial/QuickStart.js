import React from 'react';
import { BiCopy } from 'react-icons/bi';
import { FaExclamationCircle, FaHome, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const QuickStart = () => {
    const handleCopy = (id) => {
        let div = document.getElementById(id);
        let text = div.innerText;
        navigator.clipboard.writeText(text);
        toast("code copied!");

    };
    const pageIndex =
        <>
            <p className='px-2 py-1'><a href="#introduction">Introduction</a></p>
            <p className='px-2 py-1'><a href="#how-to-read">How to read this tutorial</a></p>
            <p className='px-2 py-1'><a href="#install-toolkit">Install Redux Toolkit and React-Redux</a></p>
            <p className='px-2 py-1'><a href="#create-store">Create a Redux Store</a></p>
            <p className='px-2 py-1'><a href="#provide-store">Provide the Redux Store to React</a></p>
            <p className='px-2 py-1'><a href="#create-state-slice">Create a Redux State Slice</a></p>
            <p className='px-2 py-1'><a href="#add-slice-reducer">Add Slice Reducers to the Store</a></p>
            <p className='px-2 py-1'><a href="#UseStateandActions">Use Redux State and Actions in React Components</a></p>
            <p className='px-2 py-1'><a href="#WhatLearned">What You've Learned</a></p>
            <p className='px-2 py-1'><a href="#FullCounterAppExample">Full Counter App Example</a></p>
            <p className='px-2 py-1'><a href="#WhatNext">What's Next?</a></p>
        </>

    return (
        <div className='leading-relaxed'>
            <div className='grid grid-flow-row-dense grid-cols-10 '>
                <div className='col-span-10 lg:col-span-8 mx-4'>

                    {/* breadcrumbs */}
                    <div className="text-sm breadcrumbs mt-5">
                        <ul>
                            <li><Link to="/home"><FaHome /></Link></li>
                            <li><Link to="/tutorial">Tutorial</Link></li>
                            <li><span className=' p-[6px] rounded-2xl'>Quick Start</span></li>
                        </ul>
                    </div>

                    {/* upside page index collapse for mobile */}
                    <div className="collapse collapse-arrow rounded-lg lg:hidden">
                        <input type="checkbox" className='' />
                        <div className="collapse-title bg-green-300 text-black" >
                            On this page
                        </div>
                        <div className="collapse-content ">
                            {pageIndex}
                        </div>
                    </div>

                    <h1 className='text-5xl font-bold mb-10 mt-5'>Redux Toolkit Quick Start</h1>


                    <div className='specialNotesStyle p-5 mb-5 rounded-lg border-l-[6px] border-[#00bf88]'>
                        <h3 className='mb-2 font-bold'><FaLightbulb className='inline text-[22px] mb-[5px]' /> WHAT YOU'LL LEARN</h3>
                        <ul className="list-disc list-inside pl-4">
                            <li>How to set up and use Redux Toolkit with React-Redux</li>
                        </ul>
                    </div>

                    <div className='specialNotesStyle p-5 mb-5 rounded-lg border-l-[6px] border-[#2a98b9]'>
                        <h3 className='mb-2 font-bold'><FaExclamationCircle className='inline text-[22px] mb-[5px]' /> WHAT YOU'LL LEARN</h3>
                        <ul className="list-disc list-inside pl-4">
                            <li>How to set up and use Redux Toolkit with React-Redux</li>
                            <li>Knowledge of React terminology: JSX, State, Function Components, Props, and Hooks</li>
                            <li>Understanding of Redux terms and concepts</li>
                        </ul>
                    </div>

                    <h2 id='introduction' className='text-4xl font-bold mb-5'>Introduction</h2>
                    <p className='mb-5'>
                        Welcome to the Redux Toolkit Quick Start tutorial! <span className='font-bold'> This tutorial will briefly introduce you to Redux Toolkit and teach you how to start using it correctly.</span>
                    </p>

                    <h3 id='how-to-read' className='text-3xl font-bold mb-5'>How to Read This Tutorial</h3>
                    <p className='mb-5'>
                        This page will focus on just how to set up a Redux application with Redux Toolkit and the main APIs you'll use. For explanations of what Redux is, how it works, and full examples of how to use Redux Toolkit,<Link to={'/tutorial'} className='linkColor hover:underline'> see the tutorials linked in the "Tutorials Index" page.</Link>
                    </p>
                    <p className='mb-5'>
                        For this tutorial, we assume that you're using Redux Toolkit with React, but you can also use it with other UI layers as well. The examples are based on a <Link to={'/tutorial'} className='linkColor hover:underline'> typical Create-React-App folder structure</Link> where all the application code is in a <span className='bg-gray-300 text-black px-2 pb-[3px] border border-gray-500 rounded'>src</span>, but the patterns can be adapted to whatever project or folder setup you're using.
                    </p>
                    <p className='mb-5'>
                        The <Link to={'/tutorial'} className='linkColor hover:underline'>Redux+JS template for Create-React-App</Link> comes with this same project setup already configured.
                    </p>

                    <h2 className='text-4xl font-bold mb-5' id='redux-tutorial'>Usage Summary</h2>
                    <h3 id='install-toolkit' className='text-3xl font-bold mb-5'>Install Redux Toolkit and React-Redux</h3>
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
                            npm install@reduxjs/toolkit react-redux
                        </p>
                    </div>

                    <h3 id='create-store' className='text-3xl font-bold mb-5'>Create a Redux Store</h3>
                    <p className='mb-5'>
                        Create a file named <span className='bg-gray-300  text-black px-2 pb-[3px] border border-gray-500 rounded'>src/app/store.js.</span> Import the <span className='bg-gray-300 px-2 pb-[3px] border border-gray-500 rounded'>configureStore</span> API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:
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
                            <span className='text-[#f92672]'> import</span> &#123; configureStore &#125; <span className='text-[#f92672]'>from</span> <span className='text-[#16e22e]'>'@reduxjs/toolkit'</span> <br /><br />
                            <span className='text-[#f92672]'>export default</span> <span className='text-[#e6d874]'>configureStore</span>&#40; &#123; <br />
                            <span className='text-[#f92672]'>reducer</span>: &#123; &#125; <br />
                            &#125; &#41;
                        </p>
                    </div>

                    <p className='mb-5'>
                        This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.
                    </p>

                    <h3 id='provide-store' className='text-3xl font-bold mb-5'>Provide the Redux Store to React</h3>
                    <p className='mb-5'>
                        Once the store is created, we can make it available to our React components by putting a React-Redux<span className='bg-gray-300 px-2 pb-[3px] border text-black border-gray-500 rounded'>&#60;Provider&#62;</span>  around our application in <span className='bg-gray-300 px-2 pb-[3px] border text-black border-gray-500 rounded'>src/index.js.</span> Import the Redux store we just created, put a <span className='bg-gray-300 px-2 pb-[3px] border text-black border-gray-500 rounded'>&#60;Provider&#62;</span> around your <span className='bg-gray-300  text-black px-2 pb-[3px] border border-gray-500 rounded'>&#60;App&#62;</span>, and pass the store as a prop:
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
                    <h3 id='create-state-slice' className='text-3xl font-bold mb-5'>Create a Redux State Slice</h3>
                    <p className='mb-5'>
                        Add a new file named <span className='bg-gray-300 text-black px-2 pb-[3px] border border-gray-500 rounded'>src/features/counter/counterSlice.js</span>. In that file, import the <span className='bg-gray-300 text-black px-2 pb-[3px] border border-gray-500 rounded'>createSlice</span> API from Redux Toolkit.
                    </p>
                    <p className='mb-5'>
                        Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
                    </p>
                    <p className='mb-5'>
                        Redux requires that <Link to={'/tutorial'} className='linkColor hover:underline'>we write all state updates immutably, by making copies</Link> of data and updating the copies. However, Redux Toolkit's <span className='bg-gray-300 px-2 pb-[3px] text-black border border-gray-500 rounded'>createSlice</span> and <span className='bg-gray-300 px-2 pb-[3px] border text-black border-gray-500 rounded'>createReducer</span> APIs use Immer inside to allow us to write "mutating" <Link to={'/tutorial'} className='linkColor hover:underline'>update logic that becomes correct immutable updates.</Link>
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

                    <h3 id='add-slice-reducer' className='text-3xl font-bold mb-5'>Add Slice Reducers to the Store</h3>
                    <p className='mb-5'>
                        Next, we need to import the <span className='bg-gray-300 px-2 text-black pb-[3px] border border-gray-500 rounded'>reducer</span> function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.
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

                    <h3 id='UseStateandActions' className='text-3xl font-bold mb-5'>Use Redux State and Actions in React Components</h3>
                    <p className='mb-5'>
                        Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with <span className='bg-gray-300 px-2 pb-[3px] border text-black border-gray-500 rounded'>useSelector</span>, and dispatch actions using <span className='bg-gray-300 text-black px-2 pb-[3px] border border-gray-500 rounded'>useDispatch</span>. Create a <span className='bg-gray-300 px-2 pb-[3px] border text-black border-gray-500 rounded'>src/features/counter/Counter.js</span> file with a <span className='bg-gray-300 px-2 pb-[3px] border border-gray-500 text-black rounded'>&#60;Counter&#62;</span> component inside, then import that component into <span className='bg-gray-300 px-2 pb-[3px] border text-black border-gray-500 rounded'>App.js</span> and render it inside of  <span className='bg-gray-300 px-2 pb-[3px] border text-black border-gray-500 rounded'>&#60;App&#62;</span>.
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
                        <p id="div1" className='px-3 '>
                            import &#123; configureStore &#125; from '@reduxjs/toolkit' <br />
                            export default configureStore&#40;&#123; <br />
                            reducer: &#123;&#125; <br />
                            &#125;&#41;
                        </p>
                    </div>

                    <p className='mb-5'>
                        Now, any time you click the "Increment" and "Decrement" buttons:
                    </p>
                    <ul className='list-disc ml-8 mb-5'>
                        <li>The corresponding Redux action will be dispatched to the store</li>
                        <li>The counter slice reducer will see the actions and update its state</li>
                        <li>The  <span className='bg-gray-300 text-black  px-2 pb-[3px] border border-gray-500 rounded'>&#60;Counter&#62;</span> component will see the new state value from the store and re-render itself with the new data</li>
                    </ul>

                    <h3 id='WhatLearned' className='text-3xl font-bold mb-5'>What You've Learned</h3>
                    <p className='mb-5'>
                        That was a brief overview of how to set up and use Redux Toolkit with React. Recapping the details:
                    </p>
                    <div className='specialNotesStyle p-5 mb-5 rounded-lg border-l-[6px] border-[#00bf88]'>
                        <h3 className='mb-2 font-bold'><FaLightbulb className='inline text-[22px] mb-[5px]' /> WHAT YOU'LL LEARN</h3>
                        <ul className="list-disc list-inside pl-4">
                            <li>How to set up and use Redux Toolkit with React-Redux</li>
                        </ul>
                    </div>

                    <h3 id='FullCounterAppExample' className='text-3xl font-bold mb-5'>Full Counter App Example</h3>
                    <p className='mb-5'>
                        Here's the complete counter application as a running CodeSandbox:
                    </p>

                    {/* code sand box example */}
                    <iframe src="https://codesandbox.io/embed/gallant-bhabha-xyrotn?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
                        className='mb-4'
                        style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
                        title="gallant-bhabha-xyrotn"
                        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>

                    <h3 id='WhatNext' className='text-3xl font-bold mb-5'>What's Next?</h3>
                    <p className='mb-5'>
                        We recommend going through <Link to={'/tutorial'} className='linkColor hover:underline'>the "Redux Essentials" and "Redux Fundamentals" tutorials in the Redux core docs</Link>, which will give you a complete understanding of how Redux works, what Redux Toolkit does, and how to use it correctly.
                    </p>
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

export default QuickStart;