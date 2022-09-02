import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase/firebase.init";

const UserProfile = () => {
  return (
    <div className="mt-4 ml-5">
      <ul className="grid lg:mx-20 lg:grid-cols-4 grid-cols-2 gap-2 text-2xl  font-semibold text-center">
        <li className="text-white lg:text-black  hover:bg-orange-200 hover:text-black lg:px-4 py-2 rounded">
          <Link to="/dashboard/profile">Details</Link>
        </li>
        <li className="text-white lg:text-black  hover:bg-orange-200 hover:text-black lg:px-4 py-2 rounded">
          <Link to="/dashboard/profile/skills">Skills</Link>
        </li>
        <li className="text-white lg:text-black  hover:bg-orange-200 hover:text-black  lg:px-4 py-2 rounded">
          <Link to="/dashboard/profile/education">Education</Link>
        </li>
        <li className="text-white lg:text-black  hover:bg-orange-200 hover:text-black  lg:px-4 py-2 rounded">
          <Link to="/dashboard/profile/experience">Experience</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default UserProfile;
