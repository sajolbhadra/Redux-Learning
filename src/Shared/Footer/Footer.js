import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-100 py-8 '>
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1'>
                <div className='flex flex-col text-left mx-auto'>
                    <p className='my-3 font-bold text-xl'>Docs</p>
                    <Link to='/' className='my-1'>Getting Started</Link>
                    <Link to='/' className='my-1'>Usage Guide</Link>
                    <Link to='/' className='my-1'>Getting Started</Link>
                    <Link to='/' className='my-1'>Tutorial</Link>
                    <Link to='/' className='my-1'>FAQ</Link>
                    <Link to='/' className='my-1'>API Reference</Link>
                </div>
                <div className='flex flex-col text-left mx-auto'>
                    <p className='my-3 font-bold text-xl'>Community</p>
                    <Link to='/' className='my-1'>Reactiflux Discord</Link>
                    <Link to='/' className='my-1'>Stack Overflow</Link>
                    <Link to='/' className='my-1'>Feedback</Link>
                </div>
                <div className='flex flex-col text-left mx-auto'>
                    <p className='my-3 font-bold text-xl'>More</p>
                    <Link to='/' className='my-1'>Github <i class="fa-solid fa-up-right-from-square"></i></Link>
                </div>
            </div>
            <p className='text-center my-2'>Copyright © 2022-2023 Redux Learning and the Redux documentation authors.</p>
        </div>
    );
};

export default Footer;