import React from 'react';
import { FaHome, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TutorialIndex = () => {
    return (
        <div className='leading-relaxed'>
            <div className='grid grid-flow-row-dense grid-cols-10'>
                <div className='col-span-8 mx-4'>
                    <div class="text-sm breadcrumbs mt-5">
                        <ul>
                            <li><Link to="/home"><FaHome /></Link></li>
                            <li><Link to="/tutorial">Tutorial</Link></li>
                            <li><span className='bg-gray-100 p-[6px] rounded-2xl'>Tutorial Index</span></li>
                        </ul>
                    </div>
                    <h1 className='text-5xl font-bold mb-10 mt-5'>Redux Tutorials Index</h1>
                    <h2 className='text-4xl font-bold mb-5' id='redux-tutorial'>Redux Official Tutorials</h2>
                    <p className='mb-5'>
                        The<span className='text-blue-600 font-bold'><Link to=""> Quick Start</Link></span> page briefly shows the basics of setting up a Redux
                        Toolkit + React application, and the<span className='text-blue-600 font-bold'><Link to=""> TypeScript Quick Start</Link></span> page
                        shows how to set up Redux Toolkit and React for use with TypeScript
                    </p>
                    <p className='mb-5'>We have two different full size tutorial</p>
                    <ul className='ml-4 mb-4'>
                        <li>1.<span className='text-blue-600 font-bold'><Link to=""> The Redux Essentials tutorial</Link></span> is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices.</li>
                        <li>2.<span className='text-blue-600 font-bold'><Link to=""> The Redux Fundamentals tutorial</Link></span> is a "bottom-up" tutorial that teaches "how Redux works" from first principles and without any abstractions, and why standard Redux usage patterns exist.</li>
                    </ul>
                    <div className='bg-green-50 p-5 mb-5 rounded-lg border-l-[6px] border-green-400'>
                        <h3 className='mb-2 font-bold'><FaLightbulb className='inline text-[22px] mb-[5px]' /> TIP</h3>
                        <p><span className='font-bold'> We recommend starting with the Redux Essentials tutorial,</span> since it covers the key points you need to know about how to get started using Redux to write actual applications.</p>
                    </div>

                    <h2 className='text-4xl font-bold mb-5' id='additional-resource'>Additional Resources</h2>
                    <h3 className='text-3xl font-bold mb-5'>Learn Modern Redux Livestream</h3>
                    <p className='mb-5'>
                        Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs:
                    </p>
                    <div className='mb-5'>
                        <iframe
                            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            title="video"
                        />
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

export default TutorialIndex;