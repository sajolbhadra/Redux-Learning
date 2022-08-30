import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import SearchDocs from "../../Shared/SearchDocs/SearchDocs";
import docTitles from '../../Shared/SearchDocs/docTitles.json';
// import { BsChevronDown } from "react-icons/bs";
// import { BsChevronRight } from "react-icons/bs";

const GettingStarted = () => {
  const installation = (
    <>
      <li>
        <Link to="/gettingStarted">Getting Started with Redux</Link>
      </li>
      {/* <li>
        <Link to="/gettingStarted/installation">Installation</Link>{" "}
      </li> */}
      <li>
        <Link to="/gettingStarted/whyReduxToolkit">Why redux toolkit</Link>
      </li>
      <li>
        <Link to="/gettingStarted/coreConcept">Core Concept</Link>
      </li>
      {/* <li>
        <Link to="/gettingStarted/resources">Resources</Link>
      </li> */}
      <li>
        <Link to="/gettingStarted/example">Example</Link>
      </li>
    </>
  );
  const installation2 = (
    <>
      <li>
        <Link to="/gettingStarted/tutorial">Tutorials Index </Link>
      </li>
      <li>
        <Link to="/gettingStarted/quickStart">Quick Start</Link>
      </li>
      <li>
        <Link to="/gettingStarted/typescriptQuickStart">Videos</Link>
      </li>
      <li>
        <Link to="/gettingStarted/reduxEssentials">Redux Essentials</Link>
      </li>
    </>
  );
  const installation3 = (
    <>
      <li>
        <Link to="/gettingStarted">Using Redux</Link>
      </li>
      <li>
        <Link to="/gettingStarted/installation">Setup and Organization</Link>
      </li>
      <li>
        <Link to="/gettingStarted/why-redux"> Code quality</Link>
      </li>
      <li>
        <Link to="/gettingStarted/coreConcept">Redux Essentials</Link>
      </li>
    </>
  );

  return (
    <div className="drawer drawer-mobile pt-20">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col gap-4 relative">
        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        <div className="lg:absolute top-0 right-0 mx-4 mt-2 ">
          <div className="grid grid-cols-6 px-4 py-3 items-center bg-gray-100 gap-4 rounded-lg">
            <input
              className="col-span-5 bg-gray-300 p-2 rounded-lg"
              type="text"
              placeholder="Search Lesson"
            />

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* search results */}
          {/* <div className='p-3 bg-gray-100'>
            <ul>
            {docTitles.map((titles, index) => (
                    <SearchDocs key={index} titles={titles}></SearchDocs>
                ))}
            </ul>
          </div> */}
        </div>
        <Outlet />
      </div>
      <div className="drawer-side  lg:w-64">
        <div className="dropdown hidden lg:block">
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title  font-medium ">
              <Link to="/gettingStarted">Getting Started</Link>
            </div>
            <div className="collapse-content pl-10">
              <ul className="leading-10">{installation}</ul>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title  font-medium ">
              <Link to="/gettingStarted">Tutorials</Link>
            </div>
            <div className="collapse-content pl-10">
              <ul className="leading-10">{installation2}</ul>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title  font-medium ">
              <Link to="/gettingStarted">Using Redux</Link>
            </div>
            <div className="collapse-content pl-10">
              <ul className="leading-10">{installation3}</ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default GettingStarted;
