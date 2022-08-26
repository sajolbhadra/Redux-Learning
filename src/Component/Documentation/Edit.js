import React, { useEffect, useState } from "react";
import QuizInstructions from '../Quiz/QuizInstructions.jsx';
import QuizQuestions from "../Quiz/QuizQuestions.jsx";

function Edit({ blogs }) {
  
console.log(typeof(blogs.content));

  return (
    <div className="text-lg">
      <div
        onCopy={(e) => {
          e.preventDefault();
          return false;
        }}
      >
        {typeof(blogs.content) === 'string' && 
          <div
            key={blogs._id}
            dangerouslySetInnerHTML={{ __html: blogs.content }}
          />
      }
        {typeof(blogs.content) === 'object' && 
          <QuizQuestions name={blogs.nestedRoute}/>
      }
      
      </div>
    </div>
  );
}

export default Edit;
