import React, { useEffect, useState } from "react";
import QuizInstructions from '../Quiz/QuizInstructions.jsx';

function Edit({ blogs, finalContent }) {
  
console.log(typeof(blogs.content));

  return (
    <div className="text-lg">
      <div
        onCopy={(e) => {
          e.preventDefault();
          return false;
        }}
      >
        {blogs && 
          <div
            key={blogs._id}
            dangerouslySetInnerHTML={{ __html: blogs.content }}
          />
      }
      
      {finalContent && <QuizInstructions content={finalContent}/>}
      </div>
    </div>
  );
}

export default Edit;
