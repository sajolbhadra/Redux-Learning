import React from 'react';

const Experiences = () => {
    return (
        <div>
            <div className='px-4  bg-gray-500 m-4 '>
                <h2 className="text-center font-bold text-2xl  uppercase">Experiences</h2>
                <div className='w-4 h-1 bg-[#4D4C7D] mx-auto'></div>
            </div>

            <ol class="relative border-l ml-20 border-gray-200 dark:border-gray-700">
                <li class="mb-10 ml-4">
                    <div class="absolute  w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none ">February 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                    <p class="mb-4 text-base font-normal ">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>

                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none ">March 2022</time>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                    <p class="text-base font-normal ">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li class="ml-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none">April 2022</time>
                    <h3 class="text-lg font-semibold ">E-Commerce UI code in Tailwind CSS</h3>
                    <p class="text-base font-normal ">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
            </ol>

        </div>
    );
};

export default Experiences;