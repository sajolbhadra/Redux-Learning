import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { AllContext } from "../../context/AllProvider";
import { fetchQuizzes } from "../../Features/Quizzes/quizzesSlice";
// import { getQUIZ } from "../../Services/actions/quizActions";
import Loading from "../../Shared/Loading/Loading";
import Timer from "./Timer";

const QuizQuestions = () => {
  const {name} = useParams();
  console.log(name);
  const {
    totalAns,
    setTotalAns,
    question,
    setQuestion,
    selected,
    setSelected,
  } = useContext(AllContext);
  
  const { isLoading, quizzes, error } = useSelector(state => state.quizzes)

  // const { isLoading, quizzes, error } = useSelector((state) => state.quizR);

  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuizzes(name));
  }, [dispatch,name]);

  useEffect(() => {
    if (count > 0) {
      const q = quizzes.filter((a) => parseInt(a.id) === count);
      console.log(count);
      setQuestion(q[0]);
    }
  }, [count, quizzes, setQuestion]);

  // const refresh = () => {
  //   for(let i = 0; i < questions.length; i++) {
  //   document.getElementsByName('option')[i].checked = false;
  // }};
  console.log(quizzes, isLoading, error);

  const handlePrevious = () => {
    const a = count - 1;
    setCount(a);
    if (count > 0 && count < quizzes.length) {
      const q = quizzes.filter((a) => a.id === count);
      setQuestion(q[0]);
    }
    // refresh();
  };

  const handleNext = (e) => {
    const a = count + 1;
    setCount(a);
    if (count > 0 && count < quizzes.length) {
      const q = quizzes.filter((a) => a.id === count);
      setQuestion(q[0]);
    }

    // refresh();
    getTotal();
  };

  const getTotal = () => {
    Object.keys(selected).length !== 0 &&
      totalAns.indexOf(selected.id) === -1 &&
      selected.selectedAns === question.ans &&
      totalAns.push("1");
    setTotalAns(totalAns);
  };
  // const getTotal = () => {
  //   if (selected.selectedAns === question.ans) {
  //     totalAns.push(selected);
  //   }

  //   setTotalAns(totalAns);
  // };
  console.log(selected);
  console.log(totalAns);

  console.log(totalAns);

  const handleSubmit = () => {
    navigate("/result");

    getTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  const handleAns = (e) => {
    const answer = e.target.value;
    setSelected({ id: question?.id, selectedAns: answer });
  };

  const isClicked = () => {
     const checked='';
  }

  return (
    <div className="w-full lg:w-[600px] min-h-screen px-4 lg:mx-auto my-auto py-16">
      <div className="flex justify-between mt-8">
        {isLoading && <Loading/>}
        <div>
          <p className="text-2xl text-gray-400">
            Questions: {count}/{quizzes.length}
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
              checked={isClicked}
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
              checked={isClicked}
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
              checked={isClicked}
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
              checked={isClicked}
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
        ) : count === quizzes.length ? (
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
