import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FaUserCheck } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

const Overview = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <div className="pt-4 pb-8 mb-4 px-8 overViewStyle ">
      <h2 className="text-center text-primary text-4xl font-bold uppercase py-5">
        overview
      </h2>
      <div className="cards grid grid-cols-1 lg:grid-cols-3 gap-4 md:mx-28">
        <div className="card w-[90%] mx-auto p-5 items-center">
          <figure>
            <FaUserCheck className="text-[100px] text-center"></FaUserCheck>
          </figure>
          <div className="card-body text-center">
            <h1 className="text-5xl font-bold">
              <CountUp start={viewPortEntered ? null : 0} end={500} suffix="+">
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h2 className="card-title text-center">Registered Users</h2>
          </div>
        </div>

        <div className="card w-[90%] mx-auto p-5 items-center">
          <figure>
            <GiNotebook className="text-[100px] text-center"></GiNotebook>
          </figure>
          <div className="card-body text-center">
            <h1 className="text-5xl font-bold">
              <CountUp start={viewPortEntered ? null : 0} end={400} suffix="+">
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h2 className="card-title text-center">Certificate Given</h2>
          </div>
        </div>

        <div className="card w-[90%] mx-auto p-5 items-center   ">
          <figure>
            <MdQuiz className="text-[100px] text-center"></MdQuiz>
          </figure>
          <div className="card-body text-center">
            <h1 className="text-5xl font-bold">
              <CountUp start={viewPortEntered ? null : 0} end={300} suffix="+">
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h2 className="card-title text-center">Questions for Evaluation</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
