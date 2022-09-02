import React from 'react';
import { BiCopy } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
const Example = () => {

    const handleCopyButton = (id) => {
        let div = document.getElementById(id);
        let text = div.innerText;
        navigator.clipboard.writeText(text);
        toast("code copied!");
    };

    const code10 = `
      git clone https://github.com/reduxjs/redux.git

      cd redux/examples/counter-vanilla
      open index.html
      `

    const code11 = `
      git clone https://github.com/reduxjs/redux.git

      cd redux/examples/todos-with-undo
      npm install
      npm start
      `
    const code12 = `git clone https://github.com/reduxjs/redux.git

    cd redux/examples/shopping-cart
    npm install
    npm start`;


    const code13 = `git clone https://github.com/reduxjs/redux.git

    cd redux/examples/real-world
    npm install
    npm start`;


    return (
        <div className=' lg:mr-60 px-3   pb-32'>
            <div className="text-sm breadcrumbs mt-4">
                <ul>
                    <li><Link to="/home "><FaHome /></Link></li>
                    <li><Link to="/gettingStarted" > Getting Started</Link></li>
                    <li>Example</li>
                </ul>
            </div>


            <div>
                <p className="text-5xl font-bold pt-10">Examples</p>
                <p className="text-lg my-4"> Redux's source code has a few examples that are distributed with it. The majority of these examples are also available on CodeSandbox, an online editor that enables online example playback.</p>

                <p className="text-4xl font-bold my-5"> Counter Vanilla</p>
                <p className="my-4 text-lg">Run The counter vanilla example</p>
            </div>


            <div className="bg-black group text-white my-3 p-3 relative">
                <p onClick={() => handleCopyButton('code10')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"> <BiCopy /> </p>
                <pre className="overflow-auto" id="code10">  {code10} </pre>
            </div>

            <p className="my-5 text-lg">Or check out the <a className="linkColor hover:underline" href="https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla"> sandbox</a> </p>


            <iframe src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter-vanilla/?runonclick=1"
                className='mb-4' style={{ width: '100%', height: '600px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
                sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" title="hello sand box"> </iframe>

            <p className="text-lg my-4">It does not require a build system or a view framework and exists to show the raw Redux API used with ES5.</p>



            <div>
                <p className="text-4xl font-bold my-7"> Counter</p>
                <p className="text-lg my-3">Run the Counter example:</p>
                <div className="bg-black group text-white my-3 p-3 relative">
                    <p onClick={() => handleCopyButton('code11')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"> <BiCopy /> </p>
                    <pre  className="overflow-auto" id="code11">  {code11} </pre>
                </div>

                <p className="my-5 text-lg">Or check out the <a className="linkColor hover:underline" href="https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla"> sandbox</a> </p>

                <iframe className='mb-4' style={{ width: '100%', height: '600px', border: '0', borderRadius: '4px', overflow: 'hidden' }} src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter/?runonclick=1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" title='hello code '></iframe>

                <p className="text-lg my-4">This is the most basic example of using Redux together with React. For simplicity, it re-renders the React component manually when the store changes. In real projects, you will likely want to use the highly performant React Redux bindings instead.</p>
            </div>


            <div>
                <p className="text-4xl font-bold my-7"> Todos</p>
                <p className="text-lg my-3">Run the Todos example:</p>
                <div className="bg-black group text-white my-3 p-3 relative">
                    <p onClick={() => handleCopyButton('code11')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"> <BiCopy /> </p>
                    <pre className="overflow-auto"  id="code11">  {code11} </pre>
                </div>
                <p className="my-5 text-lg">Or check out the <a className="linkColor hover:underline" href="https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla"> sandbox</a> </p>
                <iframe className='mb-4' style={{ width: '100%', height: '600px', border: '0', borderRadius: '4px', overflow: 'hidden' }} src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter/?runonclick=1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" title='hello code '></iframe>

                <p className='my-3 text-lg'>This is the best example to get a deeper understanding of how the state updates work together with components in Redux. It shows how reducers can delegate handling actions to other reducers, and how you can use React Redux to generate container components from your presentational components.</p>
            </div>


            <div>
                <p className="text-4xl font-bold my-7"> Todos with undo </p>
                <p className="text-lg my-3">Run the Todos example:</p>
                <div className="bg-black group text-white my-3 p-3 relative">
                    <p onClick={() => handleCopyButton('code11')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"> <BiCopy /> </p>
                    <pre className="overflow-auto" id="code11">  {code11} </pre>
                </div>
                <p className="my-5 text-lg">Or check out the <a className="linkColor hover:underline" href="https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla"> sandbox</a> </p>
                <iframe className='mb-4' style={{ width: '100%', height: '600px', border: '0', borderRadius: '4px', overflow: 'hidden' }} src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter/?runonclick=1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" title='hello code '></iframe>

                <p className='my-3 text-lg'>This is the best example to get a deeper understanding of how the state updates work together with components in Redux. It shows how reducers can delegate handling actions to other reducers, and how you can use React Redux to generate container components from your presentational components.</p>
            </div>


            <div>
                <p className="text-4xl font-bold my-7"> TodoMVC</p>
                <p className="text-lg my-3">Run the Todos example:</p>
                <div className="bg-black group text-white my-3 p-3 relative">
                    <p onClick={() => handleCopyButton('code11')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"> <BiCopy /> </p>
                    <pre className="overflow-auto" id="code11">  {code11} </pre>
                </div>
                <p className="my-5 text-lg">Or check out the <a className="linkColor hover:underline" href="https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla"> sandbox</a> </p>
                <iframe className='mb-4' style={{ width: '100%', height: '600px', border: '0', borderRadius: '4px', overflow: 'hidden' }} src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/counter/?runonclick=1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" title='hello code '></iframe>

                <p className='my-3 text-lg'>This is the classical TodoMVC example. It's here for the sake of comparison, but it covers the same points as the Todos example.</p>
            </div>


            <div>
                <p className="text-4xl font-bold my-7"> Shopping Cart</p>
                <p className="text-lg my-3">Run the Shopping Cart example:</p>
                <div className="bg-black group text-white my-3 p-3 relative">
                    <p onClick={() => handleCopyButton('code12')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"> <BiCopy /> </p>
                    <pre className="overflow-auto" id="code12">  {code12} </pre>
                </div>
                <p className="my-5 text-lg">Or check out the <a className="linkColor hover:underline" href="https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla"> sandbox</a> </p>
                <iframe className='mb-4' style={{ width: '100%', height: '600px', border: '0', borderRadius: '4px', overflow: 'hidden' }} title='hello code ' src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/shopping-cart/?runonclick=1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

                <p className='my-3 text-lg'>This example shows important idiomatic Redux patterns that become important as your app grows. In particular, it shows how to store entities in a normalized way by their IDs, how to compose reducers on several levels, and how to define selectors alongside the reducers so the knowledge about the state shape is encapsulated. It also demonstrates logging with Redux Logger and conditional dispatching of actions with Redux Thunk middleware.</p>
            </div>


            <div>
                <p className="text-4xl font-bold my-7">Real World </p>
                <p className="text-lg my-3">Run the Real World example:</p>
                <div className="bg-black group text-white my-3 p-3 relative">
                    <p onClick={() => handleCopyButton('code13')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"> <BiCopy /> </p>
                    <pre className="overflow-auto" id="code13">  {code13} </pre>
                </div>
                <p className="my-5 text-lg">Or check out the <a className="linkColor hover:underline" href="https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla"> sandbox</a> </p>
                <iframe className='mb-4' style={{ width: '100%', height: '600px', border: '0', borderRadius: '4px', overflow: 'hidden' }} title='hello code ' src="https://codesandbox.io/embed/github/reduxjs/redux/tree/master/examples/shopping-cart/?runonclick=1" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

                <p className='my-3 text-lg'>This is the most advanced example. It is dense by design. It covers keeping fetched entities in a normalized cache, implementing a custom middleware for API calls, rendering partially loaded data, pagination, caching responses, displaying error messages, and routing. Additionally, it includes Redux DevTools.</p>
            </div>


        </div>

    );
};

export default Example;