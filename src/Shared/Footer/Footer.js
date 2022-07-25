import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-slate-700 text-white'>
            <footer className="footer p-10 ">
                <div>
                    <span className="footer-title">Docs</span>
                    <Link to='/' className='my-1'>Getting Started</Link>
                    <Link to='/' className='my-1'>Usage Guide</Link>
                    <Link to='/' className='my-1'>Getting Started</Link>
                    <Link to='/' className='my-1'>Tutorial</Link>
                    <Link to='/' className='my-1'>FAQ</Link>
                    <Link to='/' className='my-1'>API Reference</Link>
                </div>
                <div>
                    <span className="footer-title">Community</span>
                    <Link to='/' className='my-1'>Reactiflux Discord</Link>
                    <Link to='/' className='my-1'>Stack Overflow</Link>
                    <Link to='/' className='my-1'>Feedback</Link>
                </div>
                <div>
                    <span className="footer-title">More</span>
                    <Link to='/' className='my-1'>Github <i className="fa-solid fa-up-right-from-square"></i></Link>
                    <Link to='/contact' className='my-1'>Contact <i className="fa-solid fa-up-right-from-square"></i></Link>
                </div>

            </footer>
            <p className='text-center py-5'>Copyright © 2022-2023 Redux Learning and the Redux documentation authors.</p>
            
        </div>
    );
};


export default Footer;

/* firebase deploy --only hosting:redux-learning */