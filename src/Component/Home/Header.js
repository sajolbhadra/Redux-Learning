import React from 'react';
import { Link } from 'react-router-dom';
import checkMark from './../../assets/icon/check-mark.png'
import centralized from './../../assets/icon/3d.png'
import bug2 from './../../assets/icon/bug (1).png'
import gear from './../../assets/icon/settings-gears.png'

const Header = () => {
    return (
        <div className=''>
            <div className='py-16 bg-green-200 mx-auto text-center pt-40 '>
                <h1 className='text-6xl font-bold  my-6 text-black'>Redux</h1>
                <p className=' text-2xl text-black font-bold px-3 py-2 my-5'>A Predictable State Container for JS Apps</p>
                <button class="btn btn-own mx-2 "><Link to="/gettingStarted " className=" normal-case text-xl  text-white ">Get Started</Link> </button>
                <button class="btn btn-own mx-2"><Link to="/aboutRedux " className=" normal-case text-xl  text-white ">About Redux</Link> </button>
            </div>


            {/* -----------      Cards      ---------- */}
            <div className='grid gap-5 grid-cols-1 xl:grid-cols-4 xl:mx-32 lg:grid-cols-3 lg:mx-32 md:grid-cols-3 md:mx-48 my-16 '>
                <div className='flex flex-col text-center'>
                    <img  className='box-content h-32 w-32 p-4 mx-auto' src={checkMark} alt="" />
                    <h1 className='my-2 text-3xl font-bold'>Easy to Use</h1>
                    <p className=' '>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>                    
                <div className='flex flex-col text-center'>
                    <img  className='box-content h-32 w-32 p-4 mx-auto' src={centralized} alt="" />
                    <h1 className='my-2 text-3xl font-bold'>Compact</h1>
                    <p className=' '>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>                    
                <div className='flex flex-col text-center'>
                    <img  className='box-content h-32 w-32 p-4 mx-auto' src={bug2} alt="" />
                    <h1 className='my-2 text-3xl font-bold '>Easy to Debug</h1>
                    <p className='  '>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>                    
                <div className='flex flex-col text-center'>
                    <img  className='box-content h-32 w-32 p-4 mx-auto' src={gear} alt="" />
                    <h1 className='my-2 text-3xl font-bold'>Customizable</h1>
                    <p className=' '>Redux Helps you write applications that behave consistently. run in different environment (Client, server and native) and easy to test</p>
                </div>                    
            </div>

        </div>
    );
};

export default Header;