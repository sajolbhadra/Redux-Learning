import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import useAdmin from "../../Hooks/UseAdmin";
import Profile from "./Profile/Profile";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  console.log(user, admin);

  return (
    <div className="drawer drawer-mobile pt-8  mt-12">
      <input id="dashboard_Sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">

        <Outlet></Outlet>
      </div>
      <div className="drawer-side navStyle shadow">
        <label htmlFor="dashboard_Sidebar" className="drawer-overlay "></label>
        <ul className="menu p-4 overflow-y-hidden w-64 ">
          <img className="w-40 mx-auto my-4 rounded-full" src={user?.photoURL} alt={user.name} />
          <p className="text-white font-semibold text-2xl ">{user?.displayName}</p>
          <p className="text-white  ">{user.email}</p>

          {admin && (
            <ul className="flex flex-col mt-8 text-lg">
              <li >
                <Link to="/dashboard/profile">Profile</Link>
              </li>
              <li >
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li >
                <Link to="/dashboard/inputData">Input Data</Link>
              </li>
              <li >
                <Link to="/dashboard/manageData">Manage Data</Link>
              </li>

              <li
              >
                <Link to="/dashboard/addQuiz">Add Quiz</Link>
              </li>
            </ul>
          )}

          {!admin && (
            <ul className="flex flex-col mt-8 text-lg">
              <li >
                <Link to="/dashboard/profile">Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/analysis">Analysis</Link>
              </li>
              <li>
                <Link to="/dashboard/review">Add a Review</Link>
              </li>
              <li
              >
                <Link to="/dashboard/certificate">Get Certified</Link>
              </li>
              <li
              >
                <Link to="/dashboard/adminPanel">Credits</Link>
              </li>
            </ul>
          )}


        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
