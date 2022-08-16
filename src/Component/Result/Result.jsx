import React, { useContext, useState } from "react";
import { AllContext } from "../../context/AllProvider";

import trophy from '../../assets/icon/trophy.png'
import { Link } from 'react-router-dom';


const Result = () => {
  const { totalAns, questions,setResultInPercentage } = useContext(AllContext);

  console.log(totalAns);
  const resultInPercentage =
    (parseInt(totalAns.length) / parseInt(questions.length)) * 100;
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
              resultInPercentage < 40 && <button class="btn btn-primary">Retake</button>
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
