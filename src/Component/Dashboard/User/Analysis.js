import React, { PureComponent } from "react";
import RechartsQuizMarks from "./RechartsQuizMarks";

const Analysis = () => {
  return (
    <div className=" m-4 bg-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <figure className="p-5">
            <div
              className="radial-progress  bg-[#4ADE80] text-[#4D4C7D] border-4 border-green"
              style={{ "--value": 70 }}
            >
              70%
            </div>
          </figure>
          <div className="card-body p-5 items-center text-center">
            <h2 className="card-title text-3xl font-bold text-[#4D4C7D]">
              Documentation read
            </h2>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure className="p-5">
            <div
              className="radial-progress  bg-[#4ADE80] text-[#4D4C7D] border-4 border-green"
              style={{ "--value": 70 }}
            >
              70%
            </div>
          </figure>
          <div className="card-body p-5 items-center text-center">
            <h2 className="card-title text-3xl font-bold text-[#4D4C7D]">
              Quiz Completed
            </h2>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl p-4">
          <figure className="p-5">
            <div
              className="radial-progress  bg-[#4ADE80] text-[#4D4C7D] border-4 border-green"
              style={{ "--value": 70 }}
            >
              70%
            </div>
          </figure>
          <div className="card-body p-5 items-center text-center">
            <h2 className="card-title text-3xl font-bold text-[#4D4C7D]">
              Obtained score
            </h2>
          </div>
        </div>
      </div>
      {/* marks chart */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-[#4D4C7D] text-center">
            Quiz Marks History
          </h2>
          <RechartsQuizMarks />
        </div>
      </div>
    </div>
  );
};

export default Analysis;
