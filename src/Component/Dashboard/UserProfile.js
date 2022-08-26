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
    <div className="mt-16 ml-5">
      <ul className="flex justify-center gap-x-12 text-2xl">
        <li className="hover:bg-orange-200 hover:text-white px-4 py-2 rounded">
          <Link to="/dashboard/profile">Details</Link>
        </li>
        <li className="hover:bg-orange-200 hover:text-white px-4 py-2 rounded">
          <Link to="/dashboard/profile/skills">Skills</Link>
        </li>
        <li className="hover:bg-orange-200 hover:text-white px-4 py-2 rounded">
          <Link to="/dashboard/profile/education">Education</Link>
        </li>
        <li className="hover:bg-orange-200 hover:text-white px-4 py-2 rounded">
          <Link to="/dashboard/profile/experience">Experience</Link>
        </li>
      </ul>


      <Outlet />
    </div>
  );
};

export default UserProfile;
