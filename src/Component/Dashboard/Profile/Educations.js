import React from 'react';

const Educations = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <div class="container  mx-auto w-full h-full">
                <div className='py-4'>
                    <h2 className="text-center font-bold text-2xl uppercase">Educations</h2>
                    <div className='w-4 h-1 bg-[#4D4C7D] mx-auto'></div>
                </div>

                <div class="relative wrap overflow-hidden p-10 h-full">
                    <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: "50%" }}></div>
                    {/* <!-- right timeline --> */}
                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                        <div class="order-1 w-5/12"></div>
                        <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
                        </div>
                        <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <time class="mb-1 text-sm font-normal leading-none text-black">February 2022</time>
                            <h3 class="mb-3 font-bold text-gray-800 text-xl">BSc(honurs) - Computer Science</h3>
                            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">University Of Dhaka</p>
                        </div>
                    </div>

                    {/* <!-- left timeline --> */}
                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div class="order-1 w-5/12"></div>
                        <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
                        </div>
                        <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <time class="mb-1 text-sm font-normal leading-none  text-black">February 2022</time>
                            <h3 class="mb-3 font-bold text-white text-xl">HSC (Science)</h3>
                            <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Dhaka city College</p>
                        </div>
                    </div>

                    {/* <!-- right timeline --> */}
                    <div class="mb-8 flex justify-between items-center w-full right-timeline">
                        <div class="order-1 w-5/12"></div>
                        <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
                        </div>
                        <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <time class="mb-1 text-sm font-normal leading-none text-black">February 2022</time>
                            <h3 class="mb-3 font-bold text-gray-800 text-xl">SSC (Science)</h3>
                            <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Sylhet Pilot Hight School</p>
                        </div>
                    </div>

                    {/* <!-- left timeline -->
                    <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div class="order-1 w-5/12"></div>
                        <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
                        </div>
                        <div class="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                            <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default Educations;