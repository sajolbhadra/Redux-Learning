import React from 'react';
import { BiCopy } from 'react-icons/bi';
import { FaExclamationCircle, FaHome, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const WhyRedux = () => {

    const handleCopyNpm = (id) => {
        let div = document.getElementById(id);
        let text = div.innerText;
        navigator.clipboard.writeText(text);
        toast("code copied!");
    };

    //   const handleCopyYarn = () => {
    //     let div = document.getElementById("yarn");
    //     let text = div.innerText;
    //     navigator.clipboard.writeText(text);
    //     toast("code copied!");
    //   };
    const code3 = `
const ADD_TODO = 'ADD_TODO'
const TODO_TOGGLED = 'TODO_TOGGLED'

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { text, id: nanoid() }
})

export const todoToggled = id => ({
  type: TODO_TOGGLED,
  payload: id
})

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    case TODO_TOGGLED:
      return state.map(todo => {
        if (todo.id !== action.payload.id) return todo

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}
`

    const code4 = `
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer

`;

    const code5 = `
import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'
import filtersReducer from '../features/filters/filtersSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer
  }
})
`
    return (
        <div className="ml-4 mx-4 lg:mr-60 pb-32 ">
            <div className="text-sm breadcrumbs mt-5">
                <ul>
                    <li><Link to="/home"><FaHome /></Link></li>
                    <li><Link to="/gettingStarted">Getting Started</Link></li>
                    <li><span className=' p-[6px] rounded-2xl'>Why redux toolkit</span></li>
                </ul>
            </div>
            <div>
                <p className="text-4xl font-bold">Why Redux Toolkit and How To Use Redux Today </p>
                <p className="my-4 text-2xl font-bold">What is Redux Toolkit?</p>

                <p className="mt-3 text-lg">
                    Redux Toolkit (also known as "RTK" for short) is our official recommended approach for writing Redux logic. The @reduxjs/toolkit package wraps around the core redux package, and contains API methods and common dependencies that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.
                </p>
            </div>
            <div>
                <p className="text-4xl font-bold my-6">How Redux Toolkit is Different Than the Redux Core</p>
                <p className="text-2xl font-bold">What is "Redux"?</p>
                <p className="mt-3 text-lg">

                    The first thing to ask is, "what is Redux?"
                </p>
                <p className="mt-3 text-lg">

                    Redux is really:
                </p>
                <ul className='ml-10 '>
                    <li className="list-disc my-3 text-lg">A single store containing "global" state </li>
                    <li className="list-disc  my-3 text-lg">Dispatching plain object actions to the store when something happens in the app </li>
                    <li className="list-disc  my-3 text-lg">Pure reducer functions looking at those actions and returning immutably updated state </li>
                </ul>


                <p className="mt-3 text-lg">While it's not required, <a
                    className="linkColor hover:underline"
                    href="https://redux.js.org/tutorials/fundamentals/part-7-standard-patterns"
                >your Redux code also normally include </a></p>
                <ul className='ml-10 '>
                    <li className="list-disc my-3 text-lg">Action creators that generate those action objects </li>
                    <li className="list-disc  my-3 text-lg">Middleware to enable side effects</li>
                    <li className="list-disc  my-3 text-lg">Thunk functions that contain sync or async logic with side effects </li>
                    <li className="list-disc  my-3 text-lg">Normalized state to enable looking up items by ID </li>
                    <li className="list-disc  my-3 text-lg">Memoized selector functions with the Reselect library for optimizing derived data</li>
                    <li className="list-disc  my-3 text-lg">The Redux DevTools Extension to view your action history and state changes </li>
                    <li className="list-disc  my-3 text-lg">TypeScript types for actions, state, and other functions </li>
                </ul>

                <p>Additionally, Redux is normally used with the React-Redux library to let your React components talk to a Redux store.</p>



                <div>
                    <p className="text-2xl font-bold py-7 ">What Does the Redux Core Do</p>
                    <p className="text-lg my-2">The Redux core is a very small and deliberately unopinionated library. It provides a few small API primitives:</p>
                    <ul className="ml-10">
                        <li className="list-disc my-3  text-lg"> <span className="border-2 text-black border-gray-400 p-1 bg-gray-200 ">createStore </span>to actually create a Redux store</li>
                        <li className="list-disc my-3  text-lg"> <span className="border-2 text-black border-gray-400 p-1 bg-gray-200 "> combineReducers </span>to combine multiple slice reducers into a single larger reducer</li>
                        <li className="list-disc my-3  text-lg"> <span className="border-2 text-black border-gray-400 p-1 bg-gray-200 ">applyMiddleware  </span>to combine multiple middleware into a store enhancer</li>
                        <li className="list-disc my-3  text-lg"> <span className="border-2 text-black border-gray-400 p-1 bg-gray-200 "> compose </span>to combine multiple store enhancers into a single store enhancer</li>
                    </ul>
                    <p className="text-lg my-3">Other than that, all the other Redux-related logic in your app has to be written entirely by you.</p>
                    <p className="my-3 text-lg">The good news is that this means Redux can be used in many different ways. The bad news is that there are no helpers to make any of your code easier to write.
                        For example, a reducer function is just a function. Prior to Redux Toolkit, you'd typically write it that reducer with a switch statement and manual updates. You'd also probably have hand-written action creators and action type constants along with it:</p>
                </div>


                <div className="bg-black group  text-white my-3 p-3 relative">
                    <p onClick={() => handleCopyNpm('legacyCode')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
                    <pre className="overflow-auto" id="legacyCode">
                        {code3}
                    </pre>
                </div>


                <div>
                    <p className="text-lg my-3">None of this code specifically depends on any API from the redux core library. But, this is a lot of code to write. Immutable updates required a lot of hand-written object spreads and array operations, and it was very easy to make mistakes and accidentally mutate state in the process (always the #1 cause of Redux bugs!). It was also common, though not strictly required, to spread the code for one feature across multiple files like <span className="border-2 text-black border-gray-400 p-1 bg-gray-200 ">actions/todos.js</span>,<span className="border-2 text-black border-gray-400 p-1 bg-gray-200 ">constants/todos.js</span> and  </p>
                </div>


                <div>
                    <p className="text-2xl font-bold py-7 ">What Does Redux Toolkit Do? </p>
                    <p className="text-lg my-3">While these were the patterns originally shown in the Redux docs, they unfortunately require a lot of very verbose and repetitive code. Most of this boilerplate isn't necessary to use Redux. On top of that, the boilerplate-y code lead to more opportunities to make mistakes.</p>

                    <p className="text-lg my-3 font-bold">We specifically created Redux Toolkit to eliminate the "boilerplate" from hand-written Redux logic, prevent common mistakes, and provide APIs that simplify standard Redux tasks.</p>

                    <p className="text-lg my-4">Redux Toolkit starts with two key APIs that simplify the most common things you do in every Redux app:</p>

                    <ul className="ml-10">
                        <li className="list-disc my-4 text-lg"><span className="border-2 text-black border-gray-400 p-1 bg-gray-200 ">configureStore </span>sets up a well-configured Redux store with a single function call, including combining reducers, adding the thunk middleware, and setting up the Redux DevTools integration. It also is easier to configure than <span className="border-2 text-black border-gray-400 p-1 bg-gray-200 ">createStore </span> because it takes named options parameters.</li>

                        <li className="text-lg my-4 list-disc "><span className="border-2 text-black border-gray-400 p-1 bg-gray-200 ">createSlice  </span> lets you write reducers that use the Immer library to enable writing immutable updates using "mutating" JS syntax like state.value = 123, with no spreads needed. It also automatically generates action creator functions for each reducer, and generates action type strings internally based on your reducer's names. Finally, it works great with TypeScript.</li>
                    </ul>

                    <p className="text-lg my-3">
                        That means that the code you write can be drastically simpler For example, that same todos reducer could just be:
                    </p>
                </div>


                <div className="bg-black group  text-white my-3 p-3 relative">
                    <p onClick={() => handleCopyNpm('featuresCode')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
                    <pre className="overflow-auto" id="featuresCode">
                        {code4}
                    </pre>
                </div>
                <p className="text-lg my-3">All of the action creators and action types are generated automatically, and the reducer code is shorter and easier to understand. It's also much more clear what's actually being updated in each case.</p>

                <div className="bg-black group  text-white my-3 p-3 relative">
                    <p onClick={() => handleCopyNpm('featuresCode')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
                    <pre className="overflow-auto" id="featuresCode">
                        {code5}
                    </pre>
                </div>

                <p className="text-lg font-bold my-3">Note that this one <span className="border-2 text-black border-gray-400 p-1 bg-gray-200 ">configureStore  </span>  call automatically does all the usual setup work you'd have done manually: </p>
            </div>

            <div>
                <ul className="ml-10 my-2">
                    <li className="list-disc text-lg my-3">The slice reducers were automatically passed to combineReducers() </li>
                    <li className="list-disc text-lg my-3">The redux-thunk middleware was automatically added </li>
                    <li className="list-disc text-lg my-3"> Dev-mode middleware was added to catch accidental mutations</li>
                    <li className="list-disc text-lg my-3">The Redux DevTools Extension was automatically set up</li>
                    <li className="list-disc text-lg my-3"> The middleware and DevTools enhancers were composed together and added to the store</li>
                </ul>
            </div>

            <div>
                <p className="text-2xl font-bold py-7 ">Why We Want You To Use Redux Toolkit </p>

                <div className='specialNotesStyle p-5 my-5 rounded-lg border-l-[6px] border-[#00bf88]'>
                    <h3 className='mb-2 font-bold'><FaLightbulb className='inline text-[22px] mb-[5px]' /> TIP </h3>
                    <p className="font-bold my-2">We want all Redux users to write their Redux code with Redux Toolkit, because it simplifies your code and eliminates many common Redux mistakes and bugs!</p>
                </div>
            </div>

            <div>
                 <p className="font-bold text-lg my-4"> We specifically designed Redux Toolkit to solve those problems!</p>

                 <ul className="ml-10 my-2">
                    <li className="text-lg my-3 list-disc"> Redux Toolkit simplifies store setup down to a single clear function call, while retaining the ability to fully configure the store's options if you need to</li>
                    <li className="text-lg my-3 list-disc">Redux Toolkit eliminates accidental mutations, which have always been the #1 cause of Redux bugs </li>
                    <li className="text-lg my-3 list-disc">Redux Toolkit eliminates the need to write any action creators or action types by hand</li>
                    <li className="text-lg my-3 list-disc">Redux Toolkit eliminates the need to write manual and error-prone immutable update logic </li>
                    <li className="text-lg my-3 list-disc">Redux Toolkit makes it easy to write a Redux feature's code in one file, instead of spreading it across multiple separate files</li>
                    <li className="text-lg my-3 list-disc"> Redux Toolkit offers excellent TS support, with APIs that are designed to give you excellent type safety and minimize the number of types you have to define in your code </li>
                    <li className="text-lg my-3 list-disc"> RTK Query can eliminate the need to write any thunks, reducers, action creators, or effect hooks to manage fetching data and tracking loading state </li>
                 </ul>
            </div>


            <div className='specialNotesStyle p-5 my-5 rounded-lg border-l-[6px] border-[#00bf88]'>
                    <h3 className='mb-2 font-bold'><FaLightbulb className='inline text-[22px] mb-[5px]' /> TIP </h3>
                    <p className="font-bold my-2">We specifically recommend that our users should use Redux Toolkit (the @reduxjs/toolkit package), and should not use the legacy redux core package for any new Redux code today!</p>
                </div>

                <p className="text-lg my-4">
                Even for existing applications, we recommend at least switching out createStore for configureStore as the dev-mode middleware will also help you catch accidental mutation and serializability errors in existing code bases. We also want to encourage you to switch the reducers you are using most (and any ones you write in the future) over to createSlice - the code will be shorter and easier to understand, and the safety improvements will save you time and effort going forward.
                </p>
        </div>
    );
};

export default WhyRedux;