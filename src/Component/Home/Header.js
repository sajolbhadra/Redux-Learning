import React from 'react';
import { Link } from 'react-router-dom';
import checkMark from './../../assets/icon/check-mark.png'
import centralized from './../../assets/icon/3d.png'
import bug from './../../assets/icon/bug.png'
import bug2 from './../../assets/icon/bug (1).png'
import gear from './../../assets/icon/settings-gears.png'

const Header = () => {
    return (
        <div>
            <div className='py-16 bg-purple-600 mx-auto text-center'>
                <h1 className='text-6xl font-bold  my-6 text-white'>Redux</h1>
                <p className=' text-2xl text-white py-2'>A Predictable State Container for JS Apps</p>
                <button className="btn btn-own"><Link to="/" className=" normal-case text-xl font-bold text-white py-3 ">Get Started</Link>
                </button>
            </div>
            {/* -----------      Cards      ---------- */}
            <div className='grid grid-cols-1 xl:grid-cols-4 xl:mx-48 lg:grid-cols-3 lg:mx-48 md:grid-cols-3 md:mx-48 sm:grid-cols-1 space-x-24 text-center my-16 '>
                <div className='flex flex-col'>
                    <img  className='box-content h-32 w-32 p-4 mx-auto' src={checkMark} alt="" />
                    <h1 className='my-2 text-3xl font-bold'>Easy to Use</h1>
                    <p className='text-xl text-left'>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>                    
                <div className='flex flex-col '>
                    <img  className='box-content h-32 w-32 p-4 mx-auto' src={centralized} alt="" />
                    <h1 className='my-2 text-3xl font-bold'>Compact</h1>
                    <p className='text-xl text-left'>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>                    
                <div className='flex flex-col '>
                    <img  className='box-content h-32 w-32 p-4 mx-auto' src={bug2} alt="" />
                    <h1 className='my-2 text-3xl font-bold '>Easy to Debug</h1>
                    <p className='text-xl text-left '>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>                    
                <div className='flex flex-col '>
                    <img  className='box-content h-32 w-32 p-4 mx-auto' src={gear} alt="" />
                    <h1 className='my-2 text-3xl font-bold'>Customizable</h1>
                    <p className='text-xl text-left'>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>                    
            </div>

        </div>
    );
};

export default Header;