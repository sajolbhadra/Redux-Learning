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






            <div>
                <p class='text-2xl font-bold'>Why Redux?</p>
                <p style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    What is Redux? Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. While it's mostly used as a state management tool with React, you can use it with any other JavaScript framework or library.
                </p>
                <p class='text-2xl font-bold mt-8'>Where is Redux used?</p>
                <p style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    You have large amounts of application state that are needed in many places in the app. The app state is updated frequently. The logic for updating that state may be complex. The app has a medium or large-sized codebase and might be worked on by many people.
                </p>
                <p class='text-2xl font-bold'>Is Redux hard to learn?</p>
                <p style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    You may not appreciate the power of redux in small projects, but as your app grows bigger in size, you will start to see how painless redux makes it manage the state. So practice as much as you can and surely redux will not be as difficult as it looks. How hard is it to learn Redux if you know React? Not at all.
                </p>
                <p class='text-2xl font-bold mt-8'>Is Redux required for React?</p>
                <p style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    Usually Redux is used when a value is used by multiple components in your React Project. If you have to use a state only in one component and there is no other component dependent on that state, then Redux is not required.
                </p>
            </div>





            <div>
                <p class='text-2xl font-bold'>Introduction to Redux ToolKit and Usage</p>
                <p class='text-xl font-bold'>What is Redux Toolkit </p>
                <p style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    Redux ToolKit (known as RTK in short) is a way of writing Redux Logic. The @reduxjs/toolkit package envelope around with Redux Package. It contains all the dependencies and API methods that are required for redux application. Redux Toolkit suggests the best practices and simplifies the experience and usage in application to prevent common mistakes and makes it a lot easier to write Redux Application.
                </p>
                <p style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    Redux Toolkit/ RTK makes it uncomplicated to setup store, action creator, writing immutable state containers and creating reducers.
                </p>
                <p style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    The Redux core is a very small library. It provides only few small API primitives
                </p>
                <p class='text-2xl font-bold mt-8'>Why do we need Redux Toolkit?</p>
                <p style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    The Redux core is a very small library. It provides only few small API primitives
                </p>
                <p style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    <ul style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                        <li>CreateStore to create Redux Store</li>
                        {/* 
                        
                         */}
                        <li>CombineReducers to combine multiple slice reducers into a single reducer</li>
                        <li>applyMiddleware to combine multiple middleware into a store</li>
                        <li>Compose to combine multiple store enhancers</li>
                    </ul>
                </p>
                <p class='text-2xl font-bold'>Is Redux hard to learn?</p>
                <p style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    You may not appreciate the power of redux in small projects, but as your app grows bigger in size, you will start to see how painless redux makes it manage the state. So practice as much as you can and surely redux will not be as difficult as it looks. How hard is it to learn Redux if you know React? Not at all.
                </p>
                <p class='text-2xl font-bold mt-8'>Is Redux required for React?</p>
                <p style={{ listStyle: "square" }} class="leading-10 text-lg px-20 list-disc">
                    Usually Redux is used when a value is used by multiple components in your React Project. If you have to use a state only in one component and there is no other component dependent on that state, then Redux is not required.
                </p>
            </div>
        </div>
    );
};

export default Demo;