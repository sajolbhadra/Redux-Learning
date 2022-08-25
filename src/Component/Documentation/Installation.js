import React from "react";

import { BiCopy } from "react-icons/bi";
import { toast } from "react-toastify";
import { FaExclamationCircle, FaHome, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const Installation = () => {
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
    <div className="ml-4 mx-4 lg:mr-60">
      <div className="text-sm breadcrumbs mt-5">
        <ul>
          <li>
            <Link to="/home">
              <FaHome />
            </Link>
          </li>
          <li>
            <Link to="/gettingStarted">Getting Started</Link>
          </li>
          <li>
            <span className=" p-[6px] rounded-2xl">
              Installation
            </span>
          </li>
        </ul>
      </div>
      <div>
        <p className="text-4xl font-bold my-6">Installation</p>
        <p className="text-2xl font-bold">Redux Toolkit</p>
        <p className="mt-3 text-lg">
          RTK includes utilities that help simplify many common use cases,
          including{" "}
          <a
            className="linkColor hover:underline"
            href="https://reactjs.org/"
          >
            store setup
          </a>
          ,{" "}
          <a
            className="linkColor hover:underline"
            href="https://reactjs.org/"
          >
            creating reducers and writing immutable update logic
          </a>{" "}
          , and even{" "}
          <a
            className="linkColor hover:underline"
            href="https://reactjs.org/"
          >
            creating entire "slices" of state at once.
          </a>
        </p>
        <p className="mt-3 text-lg">
          Redux Toolkit is available as a package on NPM for use with a module
          bundler or in a Node application:
        </p>
        <div className="bg-black group text-white my-3 p-3 relative">
          <p
            onClick={handleCopyNpm}
            className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
          >
            <BiCopy />
          </p>
          <p># NPM</p>
          <p id="div">
            <span className="text-yellow-500">npm install</span>{" "}
            @reduxjs/toolkit
          </p>
        </div>
        <div className="bg-black group text-white my-3 p-3 relative">
          <p
            onClick={handleCopyYarn}
            className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
          >
            <BiCopy />
          </p>
          <p># Yarn</p>
          <p id="yarn">
            <span className="text-yellow-500">yarn add</span> @reduxjs
          </p>
        </div>
        <p className="text-lg">
          It's also available as a UMD build, which can be loaded from{" "}
          <a
            className="linkColor hover:underline"
            href="https://unpkg.com/browse/@reduxjs/toolkit@1.8.3/dist/"
          >
            the <span className="border p-1 rounded bg-gray-300 text-black">dist</span>{" "}
            folder on unpkg
          </a>
          . The UMD builds make Redux Toolkit available as a{" "}
          <span className="border p-1 rounded text-black bg-gray-300">window.RTK</span>{" "}
          global variable.
        </p>
      </div>
      <div>
        <p className="text-2xl font-bold">Redux Core</p>
        <p>To install the stable version:</p>
        <div className="bg-black group text-white my-3 p-3 relative">
          <p
            onClick={handleCopyNpm}
            className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
          >
            <BiCopy />
          </p>
          <p># NPM</p>
          <p id="div">
            <span className="text-yellow-500">npm install</span> redux
          </p>
        </div>
        <div className="bg-black group text-white my-3 p-3 relative">
          <p
            onClick={handleCopyYarn}
            className="absolute top-[10px] right-[10px] invisible group-hover:visible hover:cursor-pointer"
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

export default Installation;
