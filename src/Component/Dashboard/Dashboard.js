import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import useAdmin from "../../Hooks/UseAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  console.log(user,admin);

  return (
    <div className="drawer drawer-mobile pt-20">
      <input id="dashboard_Sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard_Sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-hidden w-64 text-base-content">
          <img className="w-40 mx-auto" src={user.photoURL} alt="" />
        <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/analysis">Analysis</Link>
              </li>
              <li>
                <Link to="/dashboard/review">Add a Review</Link>
              </li>
            </>
          )}

         
          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
              <li>
                <Link to="/dashboard/inputData">Input Data</Link>
              </li>
              <li>
                <Link to="/dashboard/manageData">Manage Data</Link>
              </li>
              <li>
                <Link to="/dashboard/adminPanel">Admin Panel</Link>
              </li>
              <li>
                <Link to="/dashboard/addQuiz">Add Quiz</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
