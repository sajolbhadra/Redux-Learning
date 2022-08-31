import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' footerStyle text-white z-10 notranslate'>
            <footer className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 lg:gap-40 lg:px-60 py-6">
                <div className="flex flex-col">
                    <span className="footer-title">Docs</span>
                    <Link to='/gettingStarted' className='my-1'>Getting Started</Link>
                    <Link to='/' className='my-1'>Usage Guide</Link>
                    <Link to='/forum' className='my-1'>FAQ</Link>

                </div>
                <div className="flex flex-col">
                    <span className="footer-title">Community</span>
                    <a href='https://discord.gg/JnNYWxUT' target="_blank" rel='noopener noreferrer' className='my-1'> Discord Channel</a>
                    <a href='https://stackoverflow.com/questions/tagged/redux' target="_blank" rel='noopener noreferrer' className='my-1'>Stack Overflow</a>
                    <Link to='/dashboard/review' className='my-1'>Feedback</Link>
                </div>
                <div className="flex flex-col">
                    <span className="footer-title">More</span>
                    <Link to='/' className='my-1'>Github <i className="fa-solid fa-up-right-from-square"></i></Link>
                    <Link to='/contactUs' className='my-1'>Contact <i className="fa-solid fa-up-right-from-square"></i></Link>
                </div>

            </footer>
            <p className='text-center py-2'>Copyright © 2022-2023 Redux Learning and the Redux documentation authors.</p>
            
        </div>
    );
};


export default Footer;

/* firebase deploy --only hosting:redux-learning */