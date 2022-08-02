import React from "react";
import { Link, useNavigate } from "react-router-dom";

import register from "../../assets/Register/Welcome.png";
import auth from "./../../firebase/firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { sendEmailVerification } from "firebase/auth";
const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  // form submit action

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    if (user) {
      toast.success("account created successfully. verification email sent");
      navigate("/");
    }

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-blue-100 pt-32 px-3">
      {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> */}
      <div className="flex justify-center">
        <div className="hidden md:block lg:block">
          <img className="w-[400px]" src={register} alt="" />
        </div>
        <div className="w-full lg:w-96 bg-white px-2 py-2 lg:px-10 lg:py-8">
          <h1 className="text-center text-2xl text-blue-500 font-bold">Create An Account</h1>
          <form onSubmit={handleCreateAccount}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your Name"
                className=" input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter a valid Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p className="text-sm ">Already have an account?</p>
                <Link to="/login" className="text-sm text-blue-600">
                Login
                </Link>
              </label>
            </div>
            <div className="form-control mt-2">
              {loading ? (
                <button type="button" className="btn" disabled>
                  Creating account
                </button>
              ) : (
                <button type="submit" className="hover:bg-blue-500 py-3 rounded-xl bg-gray-500">Join Now</button>
              )}
            </div>
            {error && (
              <p className="text-center text-error my-3">{error.message}</p>
            )}
          </form>

          {/* social login process start here  */}
          <div class="divider text-blue-600 text-lg">or</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SignUp;
