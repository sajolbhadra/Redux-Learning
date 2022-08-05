import React, { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
// import { BsChevronDown } from "react-icons/bs";
// import { BsChevronRight } from "react-icons/bs";

const GettingStarted = () => {

  const installation = (
    <>
          <li><Link to="/gettingStarted">Getting Started with Redux</Link></li>
          <li><Link to="/gettingStarted/installation">Installation</Link></li>
          <li><Link to="/gettingStarted/reduxToolkit">Why redux Redux toolkit</Link></li>
          <li><Link to="/gettingStarted/coreConcept">Core Concept</Link></li>
          <li><Link to="/gettingStarted/Resources">Resources</Link></li>
          <li><Link to="/gettingStarted/example">Example</Link></li>
    </>
  );

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col gap-4 mt-16">
        {/* <div class="text-sm breadcrumbs">
          <ul>
            <li><a>Home</a></li>
            <li><a>Documents</a></li>
            <li><a >Add Document</a></li>
          </ul>
        </div> */}
        {/* <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        <Outlet />
      </div>
      <div className="drawer-side bg-green-50 mt-20 w-64">
        <div class="dropdown hidden lg:block">
          <div className="collapse collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title  font-medium ">
              <Link to="/gettingStarted">Getting Started</Link>
            </div>
            <div className="collapse-content pl-10">
                <ul className="leading-10">
                    {installation}
                </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
