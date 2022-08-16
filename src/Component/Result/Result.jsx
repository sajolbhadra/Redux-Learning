import React, { useContext, useEffect, useState } from "react";
import { AllContext } from "../../context/AllProvider";
import { useDispatch, useSelector } from "react-redux";
import trophy from '../../assets/icon/trophy.png'
import { Link } from 'react-router-dom';


const Result = () => {

  const { totalAns, setResultInPercentage } = useContext(AllContext);
  const { isLoading, quizzes, error } = useSelector((state) => state.quizR);


  console.log(totalAns);
  const resultInPercentage =
    (parseInt(totalAns.length) / parseInt(quizzes.length)) * 100;
  console.log(resultInPercentage);
  setResultInPercentage(resultInPercentage);

  return (
    <div className="min-h-screen flex items-center">
      {/* <p className="text-3xl font-bold text-center mt-20">
        Result : {resultInPercentage}%

      </p> */}

      <div class="card w-[75%] bg-base-100  mx-auto">
        <figure class="px-10 pt-10">
          <img src={trophy} alt="Shoes" class="rounded-xl" />
        </figure>

        <div class="card-body items-center text-center">
          <h2 class="card-title text-3xl font-bold text-green-400">
            Congratulations !
          </h2>
          <h2 class="card-title font-bold text-primary">
            You have got {resultInPercentage}%
          </h2>

          <div class="card-actions">

            <Link to="/answer" class="btn btn-primary">See Answer</Link>
            {
              resultInPercentage < 40 && <Link to="/quiz" class="btn btn-primary">Retake</Link>
            }

          </div>
        </div>
      </div>

      {/* {totalAns.map((a) => (
        <p>
          {a.id}. {a.selectedAns}
        </p>
      ))} */}
    </div>
  );
};

export default Result;
