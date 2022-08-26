import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase/firebase.init";

const UserProfile = ({ reload }) => {
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`https://redux-learning-server.herokuapp.com/userInfo/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        reload();
      });
  }, [user, reload]);

  console.log(reload);

  return (
    <div>
      <ul className="flex justify-center gap-x-12 text-2xl">
        <li className="hover:bg-orange-200 hover:text-white px-4 py-2 rounded">
          <Link to="/dashboard">Details</Link>
        </li>
        <li className="hover:bg-orange-200 hover:text-white px-4 py-2 rounded">
          <Link to="/dashboard">Skills</Link>
        </li>
        <li className="hover:bg-orange-200 hover:text-white px-4 py-2 rounded">
          <Link to="/dashboard">Education</Link>
        </li>
        <li className="hover:bg-orange-200 hover:text-white px-4 py-2 rounded">
          <Link to="/dashboard/profile/experience">Experience</Link>
        </li>
      </ul>

      <div className="card card-compact w-100 bg-base-100  ml-10 mt-8">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-[#4D4C7D] text-3xl font-bold">Details</h2>
            <a href="#update-profile" className="btn btn-sm rounded-none">
              edit
            </a>
          </div>
          <hr />

          {/* TABLE */}
          <table class="border-collapse border border-none ...  ">
            <tbody>
              <tr className="p-4">
                <td class=" text-xl font-normal">Name : </td>
                <td class=" text-xl font-normal">{user.displayName}</td>
              </tr>
              <tr className="p-4">
                <td class=" text-xl font-normal">Email : </td>
                <td class=" text-xl font-normal">{user.email}</td>
              </tr>
              <tr className="p-4">
                <td class=" text-xl font-normal">Date of Birth : </td>
                <td class=" text-xl font-normal">{userInfo.birthDate}</td>
              </tr>
              <tr className="p-4">
                <td class=" text-xl font-normal">Address : </td>
                <td class=" text-xl font-normal">{userInfo.address}</td>
              </tr>
              <tr className="p-4">
                <td class=" text-xl font-normal">Phone Number : </td>
                <td class=" text-xl font-normal">{userInfo.phone}</td>
              </tr>
              <tr className="p-4">
                <td class=" text-xl font-normal">LinkedIn : </td>
                <td class=" text-xl font-normal">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={userInfo.profileLink}
                  >
                    {userInfo.profileLink}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          {/* TABLE */}
          
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserProfile;
