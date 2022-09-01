import React from 'react';
import { BiCopy } from 'react-icons/bi';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const ConfigureYourStore = () => {
    const pageIndex =
        <>
            <p className='px-2 py-1'><a href="#abc">Creating the store</a></p>
            <p className='px-2 py-1'><a href="#abc">Extending Redux functionality</a></p>
            <p className='px-2 py-1'><a href="#abc"> Problems with this approach</a></p>
            <p className='px-2 py-1'><a href="#abc"> The solution: configureStore</a></p>
            <p className='px-2 py-1'><a href="#abc">Integrating the devtools extension </a></p>
            <p className='px-2 py-1'><a href="#abc">Hot reloading </a></p>
            <p className='px-2 py-1'><a href="#abc">Simplifying Setup with Redux Toolkit </a></p>
        </>




    const handleCopy = (id) => {
        let div = document.getElementById(id);

        let text = div.innerText;

        navigator.clipboard.writeText(text);
        toast("code copied!");
    };


    const store = `
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

`
const middleware = `const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }
  
  export default logger`

const enhancers = `const round = number => Math.round(number * 100) / 100

const monitorReducerEnhancer =
  createStore => (reducer, initialState, enhancer) => {
    const monitoredReducer = (state, action) => {
      const start = performance.now()
      const newState = reducer(state, action)
      const end = performance.now()
      const diff = round(end - start)

      console.log('reducer process time:', diff)

      return newState
    }

    return createStore(monitoredReducer, initialState, enhancer)
  }

export default monitorReducerEnhancer`



const render = `import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import App from './components/App'

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)`

    return (
        <div className='leading-relaxed pb-32 '>

            <div className='grid grid-flow-row-dense grid-cols-10 '>
                <div className='col-span-10 lg:col-span-8 mx-4'>
                    {/* breadcrumbs */}
                    <div className="text-sm breadcrumbs mt-5">
                        <ul>
                            <li><Link to="/home"><FaHome />home</Link></li>
                            <li><span className=' p-[6px] rounded-2xl'>Configuring Your Store </span></li>
                        </ul>
                    </div>


                    <div className="collapse collapse-arrow rounded-lg lg:hidden">
                        <input type="checkbox" className='' />
                        <div className="collapse-title bg-green-300 text-black"  >
                            On this page
                        </div>
                        <div className="collapse-content ">
                            {pageIndex}
                        </div>
                    </div>

                    <div>
                        <h1 className='text-5xl font-bold'>Configuring Your Store</h1>
                        <p className="my-6"> In the "Redux Fundamentals" tutorial, we introduced the fundamental Redux concepts by building an example Todo list app. As part of that, we talked about how to create and configure a Redux store.</p>
                        <p className="my-6">  We will now explore how to customise the store to add extra functionality. We'll start with the source code from "Redux Fundamentals" part 5: UI and React. You can view the source from this stage of the tutorial in the example app repository on Github, or in your browser via CodeSandbox.</p>
                    </div>


                    <div>
                        <h1 className='text-5xl font-bold'>Creating the store  </h1>
                        <p className="my-6"> Creating the store.</p>


                        <div className="bg-black group text-white my-3 p-3 rounded relative">
                            <p
                                onClick={() => handleCopy('store')}
                                className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
                            >
                                <BiCopy />
                            </p>
                            <pre className='overflow-auto' id="store">
                                {store}
                            </pre>
                        </div>
                        <p className="my-5">In this code, we pass our reducers to the Redux createStore function, which returns a store object. We then pass this object to the react-redux Provider component, which is rendered at the top of our component tree.
                        This ensures that any time we connect to Redux in our app via react-redux connect, the store is available to our components.</p>
                    </div>

                    <div>
                        <p className='text-3xl font-bold'>Extending Redux functionality</p>
                          <p className=' my-5 '>In this code, we pass our reducers to the Redux createStore function, which returns a store object. We then pass this object to the react-redux Provider component, which is rendered at the top of our component tree. This ensures that any time we connect to Redux in our app via react-redux connect, the store is available to our components.</p>
                          <p>Most apps extend the functionality of their Redux store by adding middleware or store enhancers (note: middleware is common, enhancers are less common). Middleware adds extra functionality to the Redux dispatch function; enhancers add extra functionality to the Redux store.</p>
                          <p>We will add two middlewares and one enhancer:</p>

                          <ul className='list-disc my-4 ' >
                            <li>The redux-thunk middleware, which allows simple asynchronous use of dispatch.</li>
                            <li>A middleware which logs dispatched actions and the resulting new state.</li>
                            <li>An enhancer which logs the time taken for the reducers to process each action.</li>
                          </ul>

                   
                    </div>

                    <div>
                        <p className="text-bold">Install redux-thunk </p>

                        <div className="bg-black group text-white my-3 p-3 rounded relative">
                            <p
                                onClick={() => handleCopy('thunk')}
                                className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
                            >
                                <BiCopy />
                            </p>
                            <pre className='overflow-auto' id="thunk">
                                npm install redux-thunk
                            </pre>
                        </div>
                    </div>


                    <div>
                        <p className="text-bold">middleware/logger.js</p>

                        <div className="bg-black group text-white my-3 p-3 rounded relative">
                            <p
                                onClick={() => handleCopy('middleware')}
                                className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
                            >
                                <BiCopy />
                            </p>
                            <pre className='overflow-auto' id="middleware">
                               {middleware}
                            </pre>
                        </div>
                    </div>


                    <div>
                        <p className="text-bold">enhancers/monitorReducer.js</p>

                        <div className="bg-black group text-white my-3 p-3 rounded relative">
                            <p
                                onClick={() => handleCopy('enhancers')}
                                className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
                            >
                                <BiCopy />
                            </p>
                            <pre className='overflow-auto' id="enhancers">
                               {enhancers}
                            </pre>
                        </div>
                    </div>

                    <ul className="list-disc my-5">
                        <li className='my-3'> First, we need to import redux-thunk plus our loggerMiddleware and monitorReducerEnhancer, plus two extra functions provided by Redux: applyMiddleware and compose.</li>
                        <li className='my-3'> We then use applyMiddleware to create a store enhancer which will apply our loggerMiddleware and the thunkMiddleware to the store's dispatch function.</li>
                        <li className='my-3'> Next, we use compose to compose our new middlewareEnhancer and our monitorReducerEnhancer into one function. This is needed because you can only pass one enhancer into createStore. To use multiple enhancers, you must first compose them into a single larger enhancer, as shown in this example.</li>
                        <li className='my-3'> Finally, we pass this new composedEnhancers function into createStore as its third argument. Note: the second argument, which we will ignore, lets you preloaded state into the store.</li>
                    </ul>


                    <div>

                        <div className="bg-black group text-white my-3 p-3 rounded relative">
                            <p
                                onClick={() => handleCopy('render')}
                                className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
                            >
                                <BiCopy />
                            </p>
                            <pre className='overflow-auto' id="render">
                               {render}
                            </pre>
                        </div>
                    </div>



                    
                    <div>
                        <p className='text-3xl font-bold'>Problems with this approach</p>
                          <p className=' my-5 '>While this code works, for a typical app it is not ideal. Most apps use more than one middleware, and each middleware often requires some initial setup. The extra noise added to the index.js can quickly make it hard to maintain, because the logic is not cleanly organised.</p>
                          <p>Most apps extend the functionality of their Redux store by adding middleware or store enhancers (note: middleware is common, enhancers are less common). Middleware adds extra functionality to the Redux dispatch function; enhancers add extra functionality to the Redux store.</p>
                    </div>


                    <div>
                        <p className='text-3xl font-bold'>The solution: configureStore</p>
                          <p className=' my-5 '>The solution to this problem is to create a new configureStore function which encapsulates our store creation logic, which can then be located in its own file to ease extensibility..</p>
                          <p>Most apps extend the functionality of their Redux store by adding middleware or store enhancers (note: middleware is common, enhancers are less common). Middleware adds extra functionality to the Redux dispatch function; enhancers add extra functionality to the Redux store.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfigureYourStore;