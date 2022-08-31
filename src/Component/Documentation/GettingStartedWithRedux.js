import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { toast } from "react-toastify";
import { FaExclamationCircle, FaHome, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import Edit from "./Edit";
import Footer from "../../Shared/Footer/Footer";

const GettingStartedWithRedux = () => {
  const handleCopyNpm = (id) => {
    let div = document.getElementById(id);
    let text = div.innerText;
    navigator.clipboard.writeText(text);
    toast("code copied!");
  };

  // const handleCopyYarn = (id) => {
  //   let div = document.getElementById(id);
  //   let text = div.innerText;
  //   navigator.clipboard.writeText(text);
  //   toast("code copied!");
  // };

  const code1 = `
      import { createStore } from 'redux'

      /**
       * This is a reducer - a function that takes a current state value and an
       * action object describing "what happened", and returns a new state value.
       * A reducer's function signature is: (state, action) => newState
       *
       * The Redux state should contain only plain JS objects, arrays, and primitives.
       * The root state value is usually an object. It's important that you should
       * not mutate the state object, but return a new object if the state changes.
       *
       * You can use any conditional logic you want in a reducer. In this example,
       * we use a switch statement, but it's not required.
       */
      function counterReducer(state = { value: 0 }, action) {
        switch (action.type) {
          case 'counter/incremented':
            return { value: state.value + 1 }
          case 'counter/decremented':
            return { value: state.value - 1 }
          default:
            return state
        }
      }

      // Create a Redux store holding the state of your app.
      // Its API is { subscribe, dispatch, getState }.
      let store = createStore(counterReducer)

      // You can use subscribe() to update the UI in response to state changes.
      // Normally you'd use a view binding library (e.g. React Redux)rather 
      than subscribe() directly.
      // There may be additional use cases where it's helpful to subscribe as well.

      store.subscribe(() => console.log(store.getState()))

      // The only way to mutate the internal state is to dispatch an action.
      // The actions can be serialized, logged or stored and later replayed.
      store.dispatch({ type: 'counter/incremented' })
      // {value: 1}
      store.dispatch({ type: 'counter/incremented' })
      // {value: 2}
      store.dispatch({ type: 'counter/decremented' })
      // {value: 1}
  
  `

  const code2 = `
  import { createSlice, configureStore } from '@reduxjs/toolkit'

  const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0
    },
    reducers: {
      incremented: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decremented: state => {
        state.value -= 1
      }
    }
  })
  
  export const { incremented, decremented } = counterSlice.actions
  
  const store = configureStore({
    reducer: counterSlice.reducer
  })
  
  // Can still subscribe to the store
  store.subscribe(() => console.log(store.getState()))
  
  store.dispatch(incremented())
  // {value: 1}
  store.dispatch(incremented())
  // {value: 2}
  store.dispatch(decremented())
  // {value: 1}
        `

  return (
    <div className="ml-4 mx-4 lg:mr-60 pb-32">
      <div className="text-sm breadcrumbs mt-4">
        <ul>
          <li> <Link to="/home"> <FaHome /> </Link> </li>
          <li> <Link to="/gettingStarted">Getting Started</Link></li>
          <li> <span className="p-[6px] rounded-2xl"> Getting Started With Redux </span></li>
        </ul>
      </div>
      <div>
        <p className="text-4xl font-bold">Getting Started With Redux</p>
        <p className="mt-3 text-lg"> Redux is a predictable state container for JavaScript apps.</p>
        <p className="mt-3 text-lg">
          It helps you applications that behave consistently, run in different
          environments (client, server, and native), and are easy to test. On
          top of that, it provides a great developer experience, such as
          <a
            className="linkColor hover:underline"
            href="https://github.com/reduxjs/redux-devtools"
          >
            live code editing combined with a time traveling debugger
          </a>
          .
        </p>

        <p className="mt-3 text-lg">

          You can use Redux together with
          <a
            className="linkColor hover:underline"
            href="https://reactjs.org/"
          >
            React
          </a>
          , or with any other view library. It is tiny (2kB, including
          dependencies), but has a large ecosystem of addons available.
        </p>
      </div>
      <div>
        <p className="text-4xl font-bold my-6">Installation</p>
        <p className="text-2xl font-bold">Redux Toolkit</p>
        <p className="mt-3 text-lg">

          <a
            className="linkColor font-bold hover:underline"
            href="https://reactjs.org/"
          >
            Redux
          </a>
          ToolKit (known as RTK in short) is a way of writing Redux Logic. The @reduxjs/toolkit package envelope around with Redux Package. It contains all the dependencies and API methods that are required for redux application. Redux Toolkit suggests the best practices and simplifies the experience and usage in application to prevent common mistakes and makes it a lot easier to write Redux Application.
        </p>
        <p className="mt-3 text-lg">
          Redux Toolkit/ RTK makes it uncomplicated to setup store, action creator, writing immutable state containers and creating reducers.
          <a
            className="linkColor hover:underline"
            href="https://reactjs.org/"
          >
            store setup
          </a>
          ,
          <a
            className="linkColor hover:underline"
            href="https://reactjs.org/"
          >
            creating reducers and writing immutable update logic
          </a>
          , and even
          <a
            className="linkColor hover:underline"
            href="https://reactjs.org/"
          >
            creating entire "slices" of state at once.
          </a>
        </p>
        <p className="mt-3 text-lg">
          Whether you're a brand new Redux user setting up your first project,
          or an experienced user who wants to simplify an existing application,
          <a
            className="linkColor font-bold hover:underline"
            href="https://reactjs.org/"
          >
            Redux Toolkit
          </a>
          can help you make your Redux code better.
        </p>
        <p className="mt-3 text-lg">
          Redux Toolkit is available as a package on NPM for use with a module
          bundler or in a Node application:
        </p>
        <div className="bg-black group text-white my-3 p-3 relative">
          <p
            onClick={() => handleCopyNpm('installToolkitNpm')}
            className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
          >
            <BiCopy />
          </p>
          <p># NPM</p>
          <p id="installToolkitNpm">
            <span className="text-yellow-500">npm install</span>{" "}
            @reduxjs/toolkit
          </p>
        </div>
        <div className="bg-black group text-white my-3 p-3 relative">
          <p
            onClick={() => handleCopyNpm('installToolkitYarn')}
            className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
          >
            <BiCopy />
          </p>
          <p># Yarn</p>
          <p id="installToolkitYarn">
            <span className="text-yellow-500">yarn add</span> @reduxjs/toolkit
          </p>
        </div>

        <div>
          <div>
            <p className="text-2xl py-7  font-bold">Create a React Redux App </p>
            <p>The official Redux+JS template or Redux+TS template for
              <a className="linkColor font-bold hover:underline" href="https://github.com/facebook/create-react-app"
              > Create React App </a>, which makes use of
              <a className="linkColor font-bold hover:underline" href="https://reduxlearning13.web.app/?fbclid=IwAR1VjkBfiQbtsHZIjuoiMjNhlUB5pQ2VnDRASDoUMz_yAU6nJ7YT5Y1QEwo"> Redux Toolkit</a> and React Redux's interaction with React components, is the suggested approach to begin new apps with React and Redux.</p>
          </div>



          <div className="bg-black group text-white my-3 p-3 relative">
            <p onClick={() => handleCopyNpm('createAppNpm')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
            <p>#  Redux + Plain JS template</p>
            <p id="createAppNpm">npx create-react-app my-app --template redux</p>
          </div>

          <div className="bg-black group text-white my-3 p-3 relative">
            <p onClick={() => handleCopyNpm('createAppYarn')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"><BiCopy /></p>
            <p># Redux + TypeScript template</p>
            <p id="createAppYarn">npx create-react-app my-app --template redux-typescript</p>
          </div>


          <div>
            <p className="text-2xl py-7  font-bold">Redux Core</p>
            <p> As a package on NPM, the Redux core library is accessible for usage with a module bundler or in a Node application:</p>


            <div className="bg-black group text-white my-3 p-3 relative">
              <p onClick={() => handleCopyNpm('reduxCoreNpm')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
              <p># NPM</p>
              <p id="reduxCoreNpm"><span className="text-yellow-500">npm install</span> redux </p>
            </div>


            <div className="bg-black group text-white my-3 p-3 relative">
              <p onClick={() => handleCopyNpm('reduxCoreYarn')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
              <p># YARN </p>
              <p id="reduxCoreYarn"><span className="text-yellow-500">yarn install</span> redux </p>
            </div>

            <p>It is also available as a precompiled UMD package that defines a <span className="border-2 text-black border-gray-400 p-1 bg-gray-200 ">window.Redux</span> global variable. The UMD package can be used as a tag directly. <br />
              For more details, see the Installation page.</p>
          </div>



          <div>
            <p className="text-2xl font-bold py-7 ">Basic Example</p>
            <p>Your app's whole global state is kept in an object tree within a single store. Only by creating an action, an object that describes what transpired, and dispatching it to the store is it possible to alter the state tree. Write pure reducer functions that compute a new state based on the previous state and the action to indicate how state is updated in response to an action.</p>


            <div className="bg-black group  text-white my-3 p-3 relative">
              <p onClick={() => handleCopyNpm('basicExampleCode')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
              <pre className="overflow-auto"  id="basicExampleCode">
                {code1}
              </pre>
            </div>

            <p>Instead of explicitly changing the state, you may express the changes you want to make using simple objects referred to as actions. Then you create a specific function known as a reducer to specify how each action modifies the state of the entire application. <br /> <br />
              In a typical Redux app, there is just a single store with a single root reducing function. As your app grows, you splitthe root reducer into smaller reducers independentlyoperating on the different parts of the state tree. This isexactly like how there is just one root component in a Reactapp, but it is composed out of many small components.
              <br /> <br />
              This architecture might seem like a lot for a counter app,but the beauty of this pattern is how well it scales tolarge</p>
          </div>



          <div>
            <p className="text-2xl font-bold py-7 ">Redux Toolkit Example</p>
            <p>Redux Toolkit simplifies the process of writing Redux logic and setting up the store. With Redux Toolkit, that same logic looks like: </p>

            <div className="bg-black group text-white my-3 p-3 relative">
              <p onClick={() => handleCopyNpm('reduxToolkitExampleCode')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
              <pre className="overflow-auto" id="reduxToolkitExampleCode">
                {code2}
              </pre>
            </div>
          </div>


          <div>
            <p className="text-2xl font-bold py-7 ">Learn Redux</p>
            <p>We have a variety of resources available to help you learn Redux.</p>



            <p className="text-2xl font-bold py-7 ">Redux Essentials Tutorial</p>
            <p>The Redux Essentials tutorial is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices. We recommend starting there.</p>


            <p className="text-2xl font-bold py-7 ">Redux Fundamentals Tutorial</p>
            <p>The Redux Fundamentals tutorial is a "bottom-up" tutorial that teaches "how Redux works" from first principles and without any abstractions, and why standard Redux usage patterns exist.</p>

            <p className="text-2xl font-bold py-7 ">Learn Modern Redux Livestream</p>
            <p>Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with TypeScript, as well as the new RTK Query data fetching APIs.
              <br /> <br /> See the "Learn Modern Redux" show notes page for a transcript and links to the example app source.</p>
          </div>

          <div >
            <iframe 
            className="lg:h-[500px] md:h-[300px] h-[200px] " 
            style={{width:'100%',  overflow: 'hidden'}} 
            src="https://www.youtube.com/embed/9zySeP5vH9c" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
          </div>

          <div>
            <p className="text-2xl font-bold py-7 ">Additional Tutorials </p>
            <ul>
              <li className="my-4 ">1. The Redux repository contains several example projects demonstrating various aspects of how to use Redux. Almost all examples have a corresponding CodeSandbox sandbox. This is an interactive version of the code that you can play with online. See the complete list of examples in the Examples page.</li>
              <li className="my-4 ">2. Redux creator Dan Abramov's free "Getting Started with Redux" video series and Building React Applications with Idiomatic Redux video courses on Egghead.io</li>
              <li className="my-4 ">3. Redux maintainer Mark Erikson's "Redux Fundamentals" conference talk and "Redux Fundamentals" workshop slides</li>
              <li className="my-4 ">4. Dave Ceddia's post A Complete React Redux Tutorial for Beginners</li>
            </ul>
          </div>


          <div>
            <p className="text-2xl font-bold py-7 ">Other Resources </p>
            <p className="my-3 ">1. The Redux FAQ answers many common questions about how to use Redux, and the "Using Redux" docs section has information on handling derived data, testing, structuring reducer logic, and reducing boilerplate.  </p>
            <p className="my-3 ">2. Redux maintainer Mark Erikson's "Practical Redux" tutorial series demonstrates real-world intermediate and advanced techniques for working with React and Redux (also available as an interactive course on Educative.io). </p>
            <p className="my-3 ">3. The React/Redux links list has categorized articles on working with reducers and selectors, managing side effects, Redux architecture and best practices, and more. </p>
            <p className="my-3 ">4. Our community has created thousands of Redux-related libraries, addons, and tools. The "Ecosystem" docs page lists our recommendations, and there's a complete listing available in the Redux addons catalog. </p>
          </div>


          <div>
            <p className="text-2xl font-bold py-7 ">Should You Use Redux? </p>
            <p>Redux is a valuable tool for organizing your state, but you should also consider whether it's appropriate for your situation. <b> Don't use Redux just because someone said you should - take some time to understand the potential benefits and tradeoffs of using it.</b></p>
            <p className="my-3 ">Here are some suggestions on when it makes sense to use Redux:</p>
            <ul>
              <li>1. You have reasonable amounts of data changing over time</li>
              <li>2. You need a single source of truth for your state</li>
              <li>3. You find that keeping all your state in a top-level component is no longer sufficient</li>
            </ul>
          </div>


          <div className='specialNotesStyle p-5 my-5 rounded-lg border-l-[6px] border-[#00bf88]'>
            <h3 className='mb-2 font-bold'><FaLightbulb className='inline text-[22px] mb-[5px]' /> For more thoughts on how Redux is meant to be used, see:</h3>
            <ul className="ml-8">
              <li className="list-disc my-2 ">Redux FAQ: When should I use Redux?</li>
              <li className="list-disc my-2 ">You Might Not Need Redux</li>
              <li className="list-disc my-2 ">The Tao of Redux, Part 1 - Implementation and Intent</li>
              <li className="list-disc my-2 ">The Tao of Redux, Part 2 - Practice and Philosophy</li>
              <li className="list-disc my-2 ">Redux FAQ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

};

export default GettingStartedWithRedux;


