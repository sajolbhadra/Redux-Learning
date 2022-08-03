import React, { useEffect, useState } from "react";

const QuizQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);
  const [count, setCount] = useState(1);
  const [isReload, setIsReload] = useState(false);

  
  useEffect(() => {
    const url = "./questions.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);});
  }, []);

  useEffect(() => {

    if (count > 0) {
        const q = questions.filter((a) => a.id === count);
        setQuestion(q[0]);
      } 
      
  },[count,questions])
  

  const handlePrevious = () => {
    const a = count -1;
    setCount(a);
    if(count > 0){
        const q = questions.filter((a) => a.id === count);
    setQuestion(q[0]);
    }
    
  };

  const handleNext = () => {
    const a = count +1;
    setCount(a);
    console.log(count);
    if(count > 0 && count < questions.length){
        const q = questions.filter((a) => a.id === count);
    setQuestion(q[0]);
    setIsReload(true);
    }
  };

  return (
    <div className="w-[600px] mx-auto mt-20">
      <div>
        <p>
          {question?.id}. <span>{question?.question}</span>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <p>
            <input
              type="checkbox"
              name="option"
              id={question?.id}
              value={question?.optionA}
              className="mr-1"
            />
            {question?.optionA}
          </p>
          <p>
            <input
              type="checkbox"
              name="option"
              id={question?.id}
              value={question?.optionB}
              className="mr-1"
            />
            {question?.optionB}
          </p>
          <p>
            <input
              type="checkbox"
              name="option"
              id={question?.id}
              value={question?.optionC}
              className="mr-1"
            />
            {question?.optionC}
          </p>
          <p>
            <input
              type="checkbox"
              name="option"
              id={question?.id}
              value={question?.optionD}
              className="mr-1"
            />
            {question?.optionD}
          </p>
        </div>
      </div>
      <div className="flex justify-between my-10">
        <div>
          <button disabled={count === 0}
            onClick={handlePrevious}
            className="px-4 py-2 bg-blue-500 rounded font-bold text-white"
          >
            Previous
          </button>
        </div>
        <div>
          <button disabled={count === questions.length && "bg-gray-500"}
            onClick={handleNext}
            className="px-4 py-2 rounded bg-blue-500 font-bold text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
