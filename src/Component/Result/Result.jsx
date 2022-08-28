import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "../../context/AllProvider";
import { useDispatch, useSelector } from "react-redux";
import trophy from "../../assets/icon/trophy.png";
import { Link } from "react-router-dom";
import ShowAnswer from "./ShowAnswer";
import { handleShowAnswer } from "../../Features/Boolean/booleanSlice";

const Result = () => {
  const dispatch = useDispatch();
  const { totalAns } = useSelector((state) => state.totalAns);
  const { showAnswer } = useSelector((state) => state.boolean);
  const { setResultInPercentage } = useContext(AllContext);
  const { quizzes } = useSelector((state) => state.quizzes);
  // const [showAnswer, setShowAnswer] = useState(false);

  console.log(showAnswer);
  console.log(totalAns);
  const resultInPercentage =
    (parseInt(totalAns.length) / parseInt(quizzes.length)) * 100;
  console.log(resultInPercentage);
  setResultInPercentage(resultInPercentage);

  return (
    <div>
      {showAnswer === false && (
        <div className="card w-[75%] bg-base-100 mx-auto">
          <figure className="px-10 pt-10">
            <img src={trophy} alt="trophy" className="rounded-xl" />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold text-green-400">
              Congratulations !
            </h2>
            <h2 className="card-title font-bold text-primary">
              You have got {resultInPercentage.toFixed(2)}%
            </h2>

            <div className="card-actions">
              {resultInPercentage > 40 && (
                <button
                  onClick={() => dispatch(handleShowAnswer())}
                  className="btn btn-primary"
                >
                  See Answer
                </button>
              )}
              {resultInPercentage < 40 && (
                <Link to="/quiz" className="btn btn-primary">
                  Retake
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
      {showAnswer && <ShowAnswer />}
    </div>
  );
};

export default Result;
