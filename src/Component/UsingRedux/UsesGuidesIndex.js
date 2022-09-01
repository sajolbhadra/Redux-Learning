import React from 'react';
import { FaExclamationCircle, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UsesGuidesIndex = () => {

    const pageIndex =
        <>
            <p className='px-2 py-1'><a href="#abc">SetUp and Organization </a></p>
            <p className='px-2 py-1'><a href="#abc">Code Quality</a></p>
            <p className='px-2 py-1'><a href="#abc">Redux Login And Patterns </a></p>
        </>

    return (
        <div className='leading-relaxed pb-32 '>

            <div className='grid grid-flow-row-dense grid-cols-10 '>
                <div className='col-span-10 lg:col-span-8 mx-4'>
                    {/* breadcrumbs */}
                    <div className="text-sm breadcrumbs mt-5">
                        <ul>
                            <li><Link to="/home"><FaHome />home</Link></li>
                            <li><span className=' p-[6px] rounded-2xl'>Uses Guide </span></li>
                        </ul>
                    </div>


                    <div className="collapse collapse-arrow rounded-lg lg:hidden">
                        <input type="checkbox" className='' />
                        <div className="collapse-title bg-green-300 text-black"  >
                            On this page
                        </div>
                        <div className="collapse-content ">
                            {pageIndex}
                        </div>
                    </div>

                <div>
                    <h1 className='text-5xl font-bold'>Uses Guides </h1>
                    <p className="my-6"> The Usage Guides section provides practical guidance on how to correctly use Redux in real-world applications, including project setup and architecture, patterns, practices, and techniques.</p>
                </div>

                    <div className='specialNotesStyle  p-5 mb-5 rounded-lg border-l-[6px] border-[#2a98b9]'>
                        <h3 className='mb-2 font-bold'><FaExclamationCircle className='inline text-[22px] mb-[5px]' />PREREQUISITES</h3>
                        <ul className="list-disc list-inside pl-4">
                            <li>The pages in this category assume you understand the core Redux terms and concepts explained in the "Redux Fundamentals" tutorial, including actions, reducers, stores, immutability, React-Redux, and async logic.</li>
                        </ul>
                    </div>

                    <div>
                        <h1 className='font-bold text-3xl my-5'> SetUp And Organization </h1>
                        <p className='mb-6'>This section covers information on how to set up and organize Redux-based projects.</p>

                        <ul className='list-disc pl-6'>
                            <li>Configure your store </li>
                            <li>Code Splitting </li>
                            <li>server Rendering </li>
                            <li>Isolating  redux sub apps </li>
                        </ul>
                    </div>


                    <div>
                        <h1 className='font-bold text-3xl my-5'> Code Quality</h1>
                        <p className='mb-6'>This section provides information on tools and techniques used to improve the quality of your Redux code.</p>

                        <ul className='list-disc pl-6'>
                            <li>Usage with TypeScript</li>
                            <li>Writing Tests</li>
                            <li>Troubleshooting</li>
                        </ul>
                    </div>



                    <div>
                        <h1 className='font-bold text-3xl my-5'> Redux Logic and Patterns </h1>
                        <p className='mb-6'>This section provides information about typical Redux patterns and approaches for writing different kinds of Redux logic.</p>

                        <ul className='list-disc pl-6'>
                            <li>Structuring Reducers </li>
                            <li>Reducing Boilerplate</li>
                            <li>Deriving Data with Selectors </li>
                            <li>Isolating  redux sub apps </li>
                        </ul>
                    </div>


                </div>
                <div className='col-span-2 relative hidden lg:block mt-20'>
                    <div className='sticky top-[5px] border-l-2 border-gray-300 p-4'>
                        {pageIndex}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsesGuidesIndex;