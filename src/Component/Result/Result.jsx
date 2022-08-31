import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import trophy from "../../assets/icon/trophy.png";
import { Link } from "react-router-dom";
import ShowAnswer from "./ShowAnswer";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { handleSelectedAnsReset } from "../../Features/Answer/selectedAnsSlice";
import { handleTotalAnsReset } from "../../Features/Answer/totalAnsSlice";
import { handleSelectedReset } from "../../Features/Answer/selectedSlice";

const Result = ({
  quiz,
  // finalResult,
  setIsResult,
  result,
  resultInPercentage,
}) => {
  const dispatch = useDispatch();
  // const { totalAns } = useSelector((state) => state.totalAns);
  // const { selectedAns } = useSelector((state) => state.selectedAns);
  // const { showAnswer } = useSelector((state) => state.boolean);
  // const { setResultInPercentage } = useContext(AllContext);
  // const { quizzes } = useSelector((state) => state.quizzes);
  const [showAnswer, setShowAnswer] = useState(false);

  // useEffect(() => {
  //   finalResult();
  // }, [finalResult]);

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
              You have got
              {resultInPercentage
                ? resultInPercentage
                : result}
              %{/* {result?.toFixed(2)}% */}
            </h2>

            <div className="card-actions">
              {result > 40 || resultInPercentage > 40 ? (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="btn btn-primary"
                >
                  See Answer
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsResult(false);
                    dispatch(handleSelectedAnsReset());
                    dispatch(handleTotalAnsReset());
                    dispatch(handleSelectedReset());
                  }}
                  className="btn btn-primary"
                >
                  Retake
                </button>
              )}
              {/* {result < 40 || resultInPercentage < 40 ? (
                
              ) : (
                ""
              )} */}
            </div>
          </div>
        </div>
      )}
      {showAnswer && <ShowAnswer quiz={quiz} />}
    </div>
  );
};

export default Result;
