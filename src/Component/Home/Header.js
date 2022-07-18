import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='py-2 bg-purple-600 mx-auto text-center'>
                <h1 className='text-3xl font-bold  my-6 text-white'>Redux</h1>
                <p className=' text-2xl text-white'>A Predictable State Container for JS Apps</p>
                <button class="btn btn-accent"><Link to="/" className=" normal-case text-xl font-bold text-white py-3">Get Started</Link>
</button>

            </div>

        </div>
    );
};

export default Header;