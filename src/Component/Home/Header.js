import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            {/* bg-purple-600 */}
            <div className='py-16 bg-green-200 mx-auto text-center pt-40 '>
                <h1 className='text-6xl font-bold  my-6 text-black'>Redux</h1>
                <p className=' text-2xl text-black font-bold  py-2 my-5'>A Predictable State Container for JS Apps</p>
                <button class="btn btn-own mx-2 "><Link to="/gettingStarted " className=" normal-case text-xl  text-white ">Get Started</Link> </button>
                <button class="btn btn-own mx-2"><Link to="/aboutRedux " className=" normal-case text-xl  text-white ">About Redux</Link> </button>
            </div>
            {/* -----------      Cards      ---------- */}
            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 space-x-24 text-center my-16'>
                <div className='flex flex-col  '>
                    <h1 className='my-3'>Easy to Use</h1>
                    <p className='my-2'>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>             
                <div className='flex flex-col '>
                    <h1 className='my-3'>Easy to Use</h1>
                    <p className='my-2'>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>             
                <div className='flex flex-col  '>
                    <h1 className='my-3'>Easy to Use</h1>
                    <p className='my-2'>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>             
                <div className='flex flex-col '>
                    <h1 className='my-3'>Easy to Use</h1>
                    <p className='my-2'>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>             
            </div>

        </div>
    );
};

export default Header;