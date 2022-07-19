import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-slate-700 text-white'>
            <footer class="footer p-10 ">
                <div>
                    <span class="footer-title">Docs</span>
                    <Link to='/' className='my-1'>Getting Started</Link>
                    <Link to='/' className='my-1'>Usage Guide</Link>
                    <Link to='/' className='my-1'>Getting Started</Link>
                    <Link to='/' className='my-1'>Tutorial</Link>
                    <Link to='/' className='my-1'>FAQ</Link>
                    <Link to='/' className='my-1'>API Reference</Link>
                </div>
                <div>
                    <span class="footer-title">Community</span>
                    <Link to='/' className='my-1'>Reactiflux Discord</Link>
                    <Link to='/' className='my-1'>Stack Overflow</Link>
                    <Link to='/' className='my-1'>Feedback</Link>
                </div>
                <div>
                    <span class="footer-title">More</span>
                    <Link to='/' className='my-1'>Github <i class="fa-solid fa-up-right-from-square"></i></Link>
                    <Link to='/contact' className='my-1'>Contact <i class="fa-solid fa-up-right-from-square"></i></Link>
                </div>

            </footer>
            <p className='text-center py-5'>Copyright © 2022-2023 Redux Learning and the Redux documentation authors.</p>
            
        </div>
    );
};





















{/* <div className='bg-slate-700 py-8 text-white '>
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1'>
                <div className='flex flex-col text-left'>
                    <p className='my-3 font-bold text-xl'></p>
                    
                </div>
                <div className='flex flex-col text-left '>
                    <p className='my-3 font-bold text-xl'></p>
                    
                </div>
                <div className='flex flex-col text-left mx-auto'>
                    <p className='my-3 font-bold text-xl'></p>
                    
                </div>
            </div>
           
        </div> */}

export default Footer;