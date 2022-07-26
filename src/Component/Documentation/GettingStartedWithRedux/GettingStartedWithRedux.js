import React, { useState } from "react";
import { BiCopy } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import { toast } from "react-toastify";

const GettingStartedWithRedux = () => {
  const handleCopyNpm = () => {
    let div = document.getElementById("div");

    let text = div.innerText;

    navigator.clipboard.writeText(text);
    toast("code copied!");
  };

  const handleCopyYarn = () => {
    let div = document.getElementById("yarn");
    let text = div.innerText;
    navigator.clipboard.writeText(text);
    toast("code copied!");
  };

  return (
    <div className="ml-4 mr-60">
      <div>
        <p className="text-4xl font-bold">Getting Started With Redux</p>
        <p className="mt-3 text-lg">
          Redux is a predictable state container for JavaScript apps.
        </p>
        <p className="mt-3 text-lg">
          It helps you applications that behave consistently, run in different
          environments (client, server, and native), and are easy to test. On
          top of that, it provides a great developer experience, such as{" "}
          <a
            className="text-blue-800 hover:text-blue-300 hover:underline"
            href="https://github.com/reduxjs/redux-devtools"
          >
            live code editing combined with a time traveling debugger
          </a>
          .{" "}
        </p>

        <p className="mt-3 text-lg">
          {" "}
          You can use Redux together with{" "}
          <a
            className="text-blue-800 hover:text-blue-300 hover:underline"
            href="https://reactjs.org/"
          >
            React
          </a>
          , or with any other view library. It is tiny (2kB, including
          dependencies), but has a large ecosystem of addons available.
        </p>
      </div>
      <div>
        <p className="text-4xl font-bold my-6">Installation</p>
        <p className="text-2xl font-bold">Redux Toolkit</p>
        <p className="mt-3 text-lg">
          {" "}
          <a
            className="text-blue-800 hover:text-blue-300 font-bold hover:underline"
            href="https://reactjs.org/"
          >
            Redux
          </a>{" "}
          Toolkit is our official recommended approach for writing Redux logic.
          It wraps around the Redux core, and contains packages and functions
          that we think are essential for building a Redux app. Redux Toolkit
          builds in our suggested best practices, simplifies most Redux tasks,
          prevents common mistakes, and makes it easier to write Redux
          applications.
        </p>
        <p className="mt-3 text-lg">
          RTK includes utilities that help simplify many common use cases,
          including{" "}
          <a
            className="text-blue-800 hover:text-blue-300 hover:underline"
            href="https://reactjs.org/"
          >
            store setup
          </a>
          ,{" "}
          <a
            className="text-blue-800 hover:text-blue-300 hover:underline"
            href="https://reactjs.org/"
          >
            creating reducers and writing immutable update logic
          </a>{" "}
          , and even{" "}
          <a
            className="text-blue-800 hover:text-blue-300 hover:underline"
            href="https://reactjs.org/"
          >
            creating entire "slices" of state at once.
          </a>
        </p>
        <p className="mt-3 text-lg">
          Whether you're a brand new Redux user setting up your first project,
          or an experienced user who wants to simplify an existing application,{" "}
          <a
            className="text-blue-800 hover:text-blue-300 font-bold hover:underline"
            href="https://reactjs.org/"
          >
            Redux Toolkit
          </a>{" "}
          can help you make your Redux code better.
        </p>
        <p className="mt-3 text-lg">
          Redux Toolkit is available as a package on NPM for use with a module
          bundler or in a Node application:
        </p>
        <div className="bg-black group text-white my-3 p-3">
          <p
            onClick={handleCopyNpm}
            className="absolute right-[270px] bottom-[140px] invisible group-hover:visible hover:cursor-pointer"
          >
            <BiCopy />
          </p>
          <p># NPM</p>
          <p id="div">
            <span className="text-yellow-500">npm install</span>{" "}
            @reduxjs/toolkit
          </p>
        </div>
        <div className="bg-black group text-white my-3 p-3">
          <p
            onClick={handleCopyYarn}
            className="absolute right-[270px] bottom-[60px] invisible group-hover:visible hover:cursor-pointer"
          >
            <BiCopy />
          </p>
          <p># Yarn</p>
          <p id="yarn">
            <span className="text-yellow-500">yarn add</span> @reduxjs/toolkit
          </p>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedWithRedux;
