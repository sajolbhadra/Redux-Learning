import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AllContext } from "../../context/AllProvider";
import Timer from "./Timer";

const QuizQuestions = () => {
  const {
    totalAns,
    setTotalAns,
    fetchQuestions,
    setFetchQuestions,
    question,
    setQuestion,
    selected,
    setSelected,
  } = useContext(AllContext);

  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const url = "./questions.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        data.map((a) => a.title === "Intro" && setFetchQuestions(a.questions)
        ));
  }, [setFetchQuestions]);


  useEffect(() => {
    if (count > 0) {
      const q = fetchQuestions.filter((a) => a.id === count);
      setQuestion(q[0]);
    }
  }, [count, fetchQuestions, setQuestion]);

  // const refresh = () => {
  //   for(let i = 0; i < questions.length; i++) {
  //   document.getElementsByName('option')[i].checked = false;
  // }};

  const handlePrevious = () => {
    const a = count - 1;
    setCount(a);
    if (count > 0 && count < fetchQuestions.length) {
      const q = fetchQuestions.filter((a) => a.id === count);
      setQuestion(q[0]);
    }
    // refresh();
  };

  const handleNext = (e) => {
    const a = count + 1;
    setCount(a);
    if (count > 0 && count < fetchQuestions.length) {
      const q = fetchQuestions.filter((a) => a.id === count);
      setQuestion(q[0]);
    }

    // refresh();
    getTotal();
  };

  const getTotal = () => {
    Object.keys(selected).length !== 0 &&
      totalAns.indexOf(selected?.id) === -1 &&
      selected?.selectedAns === question.ans &&
      totalAns.push("1");
    setTotalAns(totalAns);
  };

  console.log(totalAns);

  const handleSubmit = () => {
    navigate("/result");
    getTotal();
  };

  const handleAns = (e) => {
    const answer = e.target.value;
    setSelected({ id: question?.id, selectedAns: answer });
  };

  return (
    <div className="w-full lg:w-[600px] min-h-screen px-4 lg:mx-auto my-auto py-16">
      <div className="flex justify-between mt-8">
        <div>
          <p className="text-2xl text-gray-400">
            Questions: {count}/{fetchQuestions?.length}
          </p>
        </div>
        <Timer maxSec={60} maxMin={4} />
      </div>
      <div className="mt-8 text-xl">
        <p className="font-bold text-3xl my-4">
          {question?.id}. <span>{question?.question}</span>
        </p>
        <div
          onClick={(e) => handleAns(e)}
          className="grid grid-cols-1 w-full gap-8"
        >
          <p className="p-3 border-2 rounded">
            <input
              //   onClick={() => setRadio(true)}
              //   // disabled={isChecked}
              //   checked={radio}
              // setIsChecked={false}
              type="radio"
              name="option"
              id={question?.id}
              value={question?.optionA}
              className="mr-1 my-2 "
            />
            {question?.optionA}
          </p>
          <p className="p-3 border-2 rounded">
            <input
              // onClick={()=> setRadio(true)}
              // //  disabled={isChecked}
              // checked={radio}
              // setIsChecked={false}
              type="radio"
              name="option"
              id={question?.id}
              value={question?.optionB}
              className="mr-1 my-2 "
            />
            {question?.optionB}
          </p>
          <p className="p-3 border-2 rounded">
            <input
              // onClick={()=> setRadio(true)}
              // // disabled={isChecked}
              // checked={radio}
              // setIsChecked={false}
              type="radio"
              name="option"
              id={question?.id}
              value={question?.optionC}
              className="mr-1 my-2"
            />
            {question?.optionC}
          </p>
          <p className="p-3 border-2 rounded">
            <input
              // onClick={()=> setRadio(true)}
              // // disabled={isChecked}
              // checked={radio}
              // setIsChecked={false}
              type="radio"
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
        {count === 1 ? (
          <>
            <div>
              <button
                disabled
                onClick={handlePrevious}
                className="px-4 py-2 bg-gray-500
                rounded font-bold text-white"
              >
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded bg-blue-500 font-bold text-white"
              >
                Next
              </button>
            </div>
          </>
        ) : count === fetchQuestions.length ? (
          <>
            <div>
              <button
                onClick={handlePrevious}
                className="px-4 py-2 bg-blue-500
                rounded font-bold text-white"
              >
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-blue-500 font-bold text-white"
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <button
                onClick={handlePrevious}
                className="px-4 py-2 bg-blue-500
                rounded font-bold text-white"
              >
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded bg-blue-500 font-bold text-white"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
      {/* {isChecked && <Result totalAns={totalAns} />} */}
    </div>
  );
};

export default QuizQuestions;
