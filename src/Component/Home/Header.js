import React from "react";
import { Link } from "react-router-dom";
import checkMark from "./../../assets/icon/check-mark.png";
import centralized from "./../../assets/icon/3d.png";
import bug2 from "./../../assets/icon/bug (1).png";
import gear from "./../../assets/icon/settings-gears.png";

const Header = () => {
  return (
    <div className="">
      <div className="pt-32 pb-8 bg-green-200 mx-auto text-center ">
        <h1 className="text-6xl font-bold  my-6 text-black">Redux</h1>
        <p className=" text-2xl text-black font-bold px-3 py-2 my-5">
          A Predictable State Container for JS Apps
        </p>
        <button className="btn btn-own mx-2 hover:bg-green-300">
          <Link
            to="/gettingStarted "
            className=" normal-case text-xl  text-white "
          >
            Get Started
          </Link>{" "}
        </button>
        <button className="btn btn-own mx-2 hover:bg-green-300">
          <Link to="/aboutRedux " className=" normal-case text-xl  text-white ">
            About Redux
          </Link>{" "}
        </button>
      </div>
      <div className="pt-20 pb-8 text-center grid grid-cols-1 lg:grid-cols-2">
        <div>
          <p className=" text-4xl font-bold px-3 py-2 my-5">
            Here one can learn <br /> as well as earn
          </p>
        </div>
        <div>
          <p className="text-xl text-justify px-36 py-8">
          Reading this documentation and taking the quiz afterwards will win you some gems. through which he or she can obtain a learning redux certificate.
          </p>
          <button className="border bg-blue-400 text-white rounded font-bold px-4 py-3">Join Now</button>
        </div>
      </div>

      {/* -----------      Cards      ---------- */}
      <div className="grid gap-5 grid-cols-1 xl:grid-cols-4 xl:mx-32 lg:grid-cols-3 lg:mx-32 md:grid-cols-3 md:mx-48 my-16 ">
        <div className="flex flex-col text-center">
          <img
            className="box-content h-32 w-32 p-4 mx-auto"
            src={checkMark}
            alt=""
          />
          <h1 className="my-2 text-3xl font-bold">Easy to Use</h1>
          <p className=" ">
            Redux Helps you write applications that behave consistently. run in
            different environment (Client, server and native) and easy to test
          </p>
        </div>
        <div className="flex flex-col text-center">
          <img
            className="box-content h-32 w-32 p-4 mx-auto"
            src={centralized}
            alt=""
          />
          <h1 className="my-2 text-3xl font-bold">Compact</h1>
          <p className=" ">
            Powerful features like undo/redo, state persistence, and a host of
            other options are made possible by centralizing your application's
            state and logic.
          </p>
        </div>
        <div className="flex flex-col text-center">
          <img
            className="box-content h-32 w-32 p-4 mx-auto"
            src={bug2}
            alt=""
          />
          <h1 className="my-2 text-3xl font-bold ">Easy to Debug</h1>
          <p className="  ">
            The Redux DevTools make it simple to follow when, where, why, and
            how your application's state changed. Redux's engineering lets you
            log changes, utilize "time-travel debugging",
          </p>
        </div>
        <div className="flex flex-col text-center">
          <img
            className="box-content h-32 w-32 p-4 mx-auto"
            src={gear}
            alt=""
          />
          <h1 className="my-2 text-3xl font-bold">Customizable</h1>
          <p className=" ">
            Redux is very flexible to Implement in any Web FrameWorks and has
            large supports with Addons
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
