import React, { PureComponent } from "react";
import Educations from "../Profile/Educations";
import Experiences from "../Profile/Experiences";
import RechartsQuizMarks from "./RechartsQuizMarks";
import Skills from "../Profile/Skills";

const Analysis = () => {
  return (
    <div>
      <div className=" m-4  p-4">
        <div className="grid mb-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div class="card bg-base-100 shadow-xl">
            <figure class="p-5">
              <div
                class="radial-progress  bg-[#4ADE80] text-[#4D4C7D] border-4 border-green"
                style={{ "--value": 70 }}
              >
                70%
              </div>
            </figure>
            <div class="card-body p-5 items-center text-center">
              <h2 class="card-title text-3xl font-bold text-[#4D4C7D]">
                Documentation read
              </h2>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl ">
            <figure class="p-5">
              <div
                class="radial-progress  bg-[#4ADE80] text-[#4D4C7D] border-4 border-green"
                style={{ "--value": 70 }}
              >
                70%
              </div>
            </figure>
            <div class="card-body p-5 items-center text-center">
              <h2 class="card-title text-3xl font-bold text-[#4D4C7D]">
                Quiz Completed
              </h2>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl p-4">
            <figure class="p-5">
              <div
                class="radial-progress  bg-[#4ADE80] text-[#4D4C7D] border-4 border-green"
                style={{ "--value": 70 }}
              >
                70%
              </div>
            </figure>
            <div class="card-body p-5 items-center text-center">
              <h2 class="card-title text-3xl font-bold text-[#4D4C7D]">
                Obtained score
              </h2>
            </div>
          </div>
        </div>
        {/* marks chart */}
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-3xl font-bold text-[#4D4C7D] text-center">
              Quiz Marks History
            </h2>
            <RechartsQuizMarks />
          </div>
        </div>
        <Skills />
        <Experiences />
        <Educations />

        <div className="card bg-base-100 shadow-xl mb-8">
          <figure className="p-5">
            <div
              className="radial-progress  bg-[#4ADE80] text-[#4D4C7D] border-4 border-green"
              style={{ "--value": 70 }}
            >
              70%
            </div>
          </figure>
          <div className="card-body p-5 items-center text-center ">
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
