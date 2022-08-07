import React from 'react';
import { Link } from 'react-router-dom'
import banner from '../../assets/banner-alt.png'
import background from '../../assets/banner.jpg'

const Banner = () => {

    return (

        // <div style={{ background: `url(${background}) no-repeat center center`, backgroundSize: 'cover' }}>
            <div className="min-h-screen flex flex-col lg:flex-row items-center  justify-around lg:justify-between mx-6 my-4 lg:my-0 lg:mx-12">

                <div className="text w-full lg:w-1/2  text-center lg:text-left pt-4 ">
                    <h1 class="text-5xl text-primary uppercase font-bold">Redux</h1>
                    <p className=" text-2xl  font-bold  pt-2 ">
                        A Predictable State Container for JS Apps
                    </p>
                    <p className='py-2'>Reading this documentation and taking the quiz afterwards will win you some gems. through which he or she can obtain a learning redux certificate.</p>
                    <button class="btn btn-primary">Explore</button>
                </div>
                <div className="w-full lg:w-1/2">
                    <img src={banner} className=" lg:ml-auto" alt='' />
                </div>
            </div>
        // </div>

    );
};

export default Banner;