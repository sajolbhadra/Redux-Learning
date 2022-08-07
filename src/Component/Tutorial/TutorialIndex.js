import React from 'react';
import { FaHome, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TutorialIndex = () => {
    const pageIndex =
        <>
            <p className='px-2 py-1'><a href="#redux-tutorial">Redux Official Tutorials</a></p>
            <p className='px-2 py-1'><a href="#additional-resource">Additional Resources</a></p>
        </>
    return (
        <div className='leading-relaxed'>
            <div className='grid grid-flow-row-dense grid-cols-10 '>
                <div className='col-span-10 lg:col-span-8 mx-4'>

                    {/* breadcrumbs */}
                    <div class="text-sm breadcrumbs mt-5">
                        <ul>
                            <li><Link to="/home"><FaHome /></Link></li>
                            <li><Link to="/tutorial">Tutorial</Link></li>
                            <li><span className=' p-[6px] rounded-2xl'>Tutorial Index</span></li>
                        </ul>
                    </div>

                    {/* upside page index collapse for mobile */}
                    <div class="collapse collapse-arrow rounded-lg lg:hidden">
                        <input type="checkbox" className='' />
                        <div class="collapse-title bg-green-300 text-black" >
                            On this page
                        </div>
                        <div class="collapse-content ">
                            {pageIndex}
                        </div>
                    </div>

                    <h1 className='text-5xl font-bold mb-10 mt-5'>Redux Tutorials Index</h1>
                    <h2 className='text-4xl font-bold mb-5' id='redux-tutorial'>Redux Official Tutorials</h2>
                    <p className='mb-5'>
                        The<Link to={'/tutorial'} className='linkColor font-bold hover:underline'> Quick Start</Link> page briefly shows the basics of setting up a Redux
                        Toolkit + React application, and the<Link to={'/tutorial'} className='linkColor font-bold hover:underline'> TypeScript Quick Start</Link> page
                        shows how to set up Redux Toolkit and React for use with TypeScript
                    </p>
                    <p className='mb-5'>We have two different full size tutorial</p>
                    <ul className='list-disc ml-8 mb-5'>
                        <li><Link to={'/tutorial'} className='linkColor font-bold hover:underline'> The Redux Essentials tutorial</Link> is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices.</li>
                        <li><Link to={'/tutorial'} className='linkColor font-bold hover:underline'> The Redux Fundamentals tutorial</Link> is a "bottom-up" tutorial that teaches "how Redux works" from first principles and without any abstractions, and why standard Redux usage patterns exist.</li>
                    </ul>
                    <div className='specialNotesStyle p-5 mb-5 rounded-lg border-l-[6px] border-[#00bf88]'>
                        <h3 className='mb-2 font-bold'><FaLightbulb className='inline text-[22px] mb-[5px]' /> TIP</h3>
                        <p><span className='font-bold'> We recommend starting with the Redux Essentials tutorial,</span> since it covers the key points you need to know about how to get started using Redux to write actual applications.</p>
                    </div>

                    <h2 className='text-4xl font-bold mb-5' id='additional-resource'>Additional Resources</h2>
                    <h3 className='text-3xl font-bold mb-5'>Learn Modern Redux Livestream</h3>
                    <p className='mb-5'>
                        Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs:
                    </p>
                    <div className='mb-5 '>
                        <iframe
                            src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                            className='h-[200px] md:h-[300px] lg:h-[500px]'
                            style={{ width: '100%', border: '0', borderRadius: '4px', overflow: 'hidden' }}
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                            title="video"
                        />
                    </div>
                </div>

                {/* right side index bar for desktop */}
                <div className='col-span-2 relative hidden lg:block'>
                    <div className='sticky top-[5px] border-l-2  p-4'>
                        {pageIndex}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorialIndex;