import React from 'react';
import { BiCopy } from 'react-icons/bi';
import { FaExclamationCircle, FaHome, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
const CoreConcepts = () => {

    const handleCopyButton = (id) => {
        let div = document.getElementById(id);
        let text = div.innerText;
        navigator.clipboard.writeText(text);
        toast('code copied')
    }
    const code6 = `{
        todos: [{
          text: 'Eat food',
          completed: true
        }, {
          text: 'Exercise',
          completed: false
        }],
        visibilityFilter: 'SHOW_COMPLETED'
      }`;

    const code7 = `
    { type: 'ADD_TODO', text: 'Go to swimming pool' }
    { type: 'TOGGLE_TODO', index: 1 }
    { type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }`;

    const code8 = `
    function visibilityFilter(state = 'SHOW_ALL', action) {
        if (action.type === 'SET_VISIBILITY_FILTER') {
          return action.filter
        } else {
          return state
        }
      }
      
      function todos(state = [], action) {
        switch (action.type) {
          case 'ADD_TODO':
            return state.concat([{ text: action.text, completed: false }])
          case 'TOGGLE_TODO':
            return state.map((todo, index) =>
              action.index === index
                ? { text: todo.text, completed: !todo.completed }
                : todo
            )
          default:
            return state
        }
      }`;


      const code9 = `
      function todoApp(state = {}, action) {
        return {
          todos: todos(state.todos, action),
          visibilityFilter: visibilityFilter(state.visibilityFilter, action)
        }
      }
      `;

    return (
        <div className="ml-4 mx-4 lg:mr-60 pb-32 ">
            <div className="text-sm breadcrumbs mt-5">
                <ul>
                    <li><Link to="/home"><FaHome /></Link></li>
                    <li><Link to="/gettingStarted">Getting Started</Link></li>
                    <li><span className='p-[6px] rounded-2xl'>Core Concepts</span></li>
                </ul>
            </div>
            <div>
                <p className="text-5xl font-bold ">Core Concepts</p>
                <p className="mt-3 text-lg">Imagine your app’s state is described as a plain object. For example, the state of a todo app might look like this: </p>
            </div>

            <div className="bg-black group text-white my-3 p-3 relative">
                <p onClick={() => handleCopyButton('coreConceptCode6')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
                <pre id="coreConceptCode6">{code6}</pre>
            </div>

            <p className="text-lg my-4">This object is like a “model” except that there are no setters. This is so that different parts of the code can’t change the state arbitrarily, causing hard-to-reproduce bugs.</p>
            <p className="text-lg my-4"> To change something in the state, you need to dispatch an action. An action is a plain JavaScript object (notice how we don’t introduce any magic?) that describes what happened. Here are a few example actions:</p>

            <div className="bg-black group text-white my-3 p-3 relative">
                <p onClick={() => handleCopyButton('code7')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
                <pre id="code7">{code7}</pre>
            </div>
            
            <p className="text-lg my-4">Every change must be defined as an action in order for us to understand what is happening in the app. We are aware of the causes of any changes. The breadcrumbs of what has occurred are actions. Finally, we create a function called a reducer to connect state and actions. Once more, there is nothing mystical about it; it is only a function that accepts state and action as arguments and returns the app's next state. Since writing such a function for a large app would be challenging, we instead create smaller functions to handle specific state components: </p>


            <div className="bg-black group text-white my-3 p-3 relative">
                <p onClick={() => handleCopyButton('code8')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
                <pre id="code8">{code8}</pre>
            </div>


            <p className="text-lg my-4">And we write another reducer that manages the complete state of our app by calling those two reducers for the corresponding state keys:</p>


            <div className="bg-black group text-white my-3 p-3 relative">
                <p onClick={() => handleCopyButton('code9')} className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer" ><BiCopy /></p>
                <pre id="code9">{code9}</pre>
            </div>


            <p className="my-4 text-lg">This is essentially Redux's central concept. Notably, we didn't make use of any Redux APIs. The core concept is that you specify how your state is updated over time in response to action objects, and 90% of the code you write is just ordinary JavaScript, with no usage of Redux itself, its APIs, or any magic. It comes with a few tools to help you implement this pattern.</p>
        </div>
    );
};

export default CoreConcepts;