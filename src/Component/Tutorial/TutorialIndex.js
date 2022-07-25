import React from 'react';

const TutorialIndex = () => {
    return (
        <div className=''>
            <div className='grid grid-flow-row-dense grid-cols-10'>
                <div className='col-span-8'>

                    <h1 className='text-5xl font-bold'>Redux Tutorials Index</h1>
                    <h2 className='text-4xl font-bold' id='redux-tutorial'>Redux Official Tutorials</h2>
                    <p>
                        The Quick Start page briefly shows the basics of setting up a Redux
                        Toolkit + React application, and the TypeScript Quick Start page
                        shows how to set up Redux Toolkit and React for use with TypeScript
                    </p>
                    <p>We have two different full size tutorial</p>
                    <ul>
                        <li>1. The Redux Essentials tutorial is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices.</li>
                        <li>2. The Redux Fundamentals tutorial is a "bottom-up" tutorial that teaches "how Redux works" from first principles and without any abstractions, and why standard Redux usage patterns exist.</li>
                    </ul>
                    <div>
                        <h3>TIP</h3>
                        <p>We recommend starting with the Redux Essentials tutorial, since it covers the key points you need to know about how to get started using Redux to write actual applications.</p>
                    </div>

                    <h2 className='text-4xl font-bold' id='additional-resource'>Additional Resources</h2>
                    <h3 className='text-3xl font-bold'>Learn Modern Redux Livestream</h3>
                    <p>
                        Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs:
                    </p>
                    <div>
                    <iframe
                        className='w-full h-[400px]'
                        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='sticky top-0 border-l-2 border-indigo-500'>
                    <a href="#redux-tutorial">Redux Official Tutorials</a> <br />
                    <a href="#additional-resource">Additional Resources</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorialIndex;