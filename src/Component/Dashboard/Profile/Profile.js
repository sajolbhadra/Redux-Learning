import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase/firebase.init";
import UserProfile from "../UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { handleReload } from "../../../Features/Boolean/booleanSlice";
import { Outlet } from "react-router-dom";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  // const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState([]);
  const { reload } = useSelector((state) => state.boolean);


  useEffect(() => {
    fetch(`http://localhost:5000/userInfo/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
        reload();
      });
  }, [user, reload]);

  console.log(reload);
  // const [reload, setReload] = useState(false);

  const onSubmit = (data) => {
    const url = `https://redux-learning-server.herokuapp.com/userInfo/${user.email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.upsertedCount === 1) {
          toast("Updated!!");
          dispatch(handleReload());
        } else {
          toast.error("Already Updated!!");
        }
      });
  };

  return (
    <div className=" overflow-y-hidden px-4  navStyle m-4 ">
      {/* <UserProfile reload={reload}></UserProfile> */}
      <div className="card card-compact w-100  ml-10 mt-8">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className=" text-3xl font-bold">Details</h2>
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



      {/* <UserProfile reload={reload}></UserProfile> */}
      <div id="update-profile" className="ml-10 navStyle p-4 rounded-xl my-4">
        <div className="flex justify-between items-center my-2">
          <h2 className="text-3xl font-bold">Update Profile</h2>
          <button
              type="submit"
              className="btn btn-sm px-4 py-2 hover:text-white"
            >
              Update
            </button>
        </div>
        <hr />
        <form
          className="flex flex-col justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span>Email</span>
              </label>
              <input
                type="email"
                value={user.email}
                className="input text-black input-bordered w-full max-w-xs"
                {...register("email")}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span>Date of Birth</span>
              </label>
              <input
                type="text"
                placeholder="dd-mm-yy"
                className="input placeholder:text-black text-black  input-bordered w-full max-w-xs"
                {...register("birthDate", { required: true })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span>Address</span>
              </label>
              <textarea
                type=""
                placeholder="Address"
                className="input placeholder:text-black text-black  input-bordered w-full max-w-xs"
                {...register("address", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span>Phone Number</span>
              </label>
              <input
                type="phone"
                placeholder="Phone Number"
                className="input placeholder:text-black text-black  input-bordered w-full max-w-xs"
                {...register("phone", {
                  required: {
                    value: true,
                  },
                  pattern: {
                    value: /[0-9]/,
                  },
                })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span>LinkedIn</span>
              </label>
              <input
                type="url"
                placeholder="url"
                className="input text-black  placeholder:text-black input-bordered w-full max-w-xs"
                {...register("profileLink", { required: true })}
              />
            </div>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
