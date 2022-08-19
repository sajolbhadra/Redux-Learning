import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import useAdmin from "../../Hooks/UseAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  console.log(user, admin);

  return (
    <div className="drawer drawer-mobile pt-20 bg-gray-50">
      <input id="dashboard_Sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {admin && (
          <ul className="flex justify-center gap-4 my-5  ">
            <li className="btn rounded-none">
              <Link to="/dashboard">Profile</Link>
            </li>
            <li className="btn rounded-none">
              <Link to="/dashboard/users">All Users</Link>
            </li>
            <li className="btn rounded-none">
              <Link to="/dashboard/inputData">Input Data</Link>
            </li>
            <li className="btn rounded-none">
              <Link to="/dashboard/manageData">Manage Data</Link>
            </li>
            <li className="btn rounded-none">
              <Link to="/dashboard/adminPanel">Admin Panel</Link>
            </li>
            <li className="btn rounded-none">
              <Link to="/dashboard/addQuiz">Add Quiz</Link>
            </li>
          </ul>
        )}
        {!admin && (
          <ul className="flex justify-center gap-4 my-5 children:bg-red-500">
            <li className="btn rounded-none">
              <Link to="/dashboard/analysis">Analysis</Link>
            </li>
            <li className="btn rounded-none">
              <Link to="/dashboard/review">Add a Review</Link>
            </li>
          </ul>
        )}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side navStyle shadow">
        <label htmlFor="dashboard_Sidebar" className="drawer-overlay "></label>
        <ul className="menu p-4 overflow-y-hidden w-64 text-base-content">
          <img className="w-40 mx-auto my-4 rounded-full" src={user?.photoURL} alt={user.name} />
          <p className="text-white font-semibold text-2xl ">{user?.displayName}</p>
          <p className="text-white  ">{user.email}</p>


        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
