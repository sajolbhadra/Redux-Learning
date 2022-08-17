import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
// import { BsChevronDown } from "react-icons/bs";
// import { BsChevronRight } from "react-icons/bs";

const GettingStarted = () => {

  const installation = (
    <>
      <li>
        <Link to="/gettingStarted">Getting Started with Redux</Link>
      </li>
      <li>
        <Link to="/gettingStarted/installation">Installation</Link>{" "}
      </li>
      <li>
        <Link to="/gettingStarted/whyReduxToolkit">Why redux toolkit</Link>
      </li>
      <li>
        <Link to="/gettingStarted/coreConcept">Core Concept</Link>
      </li>
      <li>
        <Link to="/gettingStarted/resources">Resources</Link>
      </li>
      <li>
        <Link to="/gettingStarted/example">Example</Link>
      </li>
    </>
  );
  const installation2 = (
    <>
      <li>
        <Link to="/tutorial">Tutorials Index </Link>
      </li>
      <li>
        <Link to="/tutorial/quickStart">Quick Start</Link>
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
        <Link to="/gettingStarted/getting-started">Using Redux</Link>
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
      <div className="drawer-content flex flex-col gap-4">
        {/* <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        <Outlet />
      </div>
      <div className="drawer-side  lg:w-64">
        <div class="dropdown hidden lg:block">
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
