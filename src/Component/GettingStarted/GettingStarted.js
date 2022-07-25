import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const GettingStarted = () => {
  const [isTrue, setIsTrue] = useState(false);
 const [state, setState] = useState("");
 const handleState = (e) =>{
    const value = e.target.value;
    console.log(value);
 }

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mt-16">
        <div class="text-sm breadcrumbs h-[1000px]">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>
        {/* <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        <Outlet />
      </div>
      <div className="drawer-side  bg-green-50 mt-16 w-64">
        <div class="dropdown">
          <label
            tabIndex="1"
            className="flex justify-between items-center mx-6"
            onClick={() => setIsTrue(!isTrue)}
          >
            <p className="text-lg font-bold">Introduction </p>
            {isTrue ? (
              <BsChevronDown className="stroke-2" />
            ) : (
              <BsChevronRight className="stroke-2" />
            )}
          </label>
          {isTrue ? (
            <ul
              tabIndex="1"
              className="menu p-4 overflow-y-auto text-base-content dropdown-content menu p-2 ml-4 w-56"
            >
              <li onClick={(e) => handleState(e)}>
                <Link to="/gettingStarted/getting-started">
                  Getting Started with Redux
                </Link>
              </li>
              <li>
                <Link to="/gettingStarted/installation">Installation</Link>
              </li>
              <li>
                <Link to="/gettingStarted/reduxToolkit">
                  Why redux Redux toolkit
                </Link>
              </li>
              <li>
                <Link to="/gettingStarted/coreConcept">Core Concept</Link>
              </li>
              <li>
                <Link to="/gettingStarted/Resources">Resources</Link>
              </li>
              <li>
                <Link to="/gettingStarted/example">Example</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
