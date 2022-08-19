import React from 'react';

const Demo = () => {
    return (
        <div className='mt-20'>
            <div>
                <p class='text-2xl font-bold'>What is Redux?</p>
                <ul style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    <li>A single Store Containing “Global State</li>
                    <li>Dispatching Plain Object actions to the store when something happens in the app</li>
                    <li>Pure Reducer Function looking at those actions and returning immutably updated state.</li>
                </ul>
                <p class='text-2xl font-bold mt-8'>Redux code also includes the following features</p>
                <ul style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    <li>Action Creators that Generate those action objects</li>
                    <li>Middleware to enable side effects</li>
                    <li>Thunk functions that contain sync or async logic with side effects</li>
                    <li>Normalized state to enable looking up items by ID</li>
                    <li>Memorized selector functions with the Reselect Library for optimizing derived data</li>
                    <li>The Redux DevTools Extensions to view your action history and state Changes</li>
                    <li>Typescript Types for actions, state and other functions</li>
                </ul>


            </div>
            
        </div>
    );
};

export default Demo;