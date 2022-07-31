import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import SocialLogin from "./../../Shared/SocialLogin/SocialLogin";
import { sendPasswordResetEmail } from "firebase/auth";
import login from "../../assets/Login/Nice to Have You Back.png";

import { toast } from "react-toastify";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password)
    // resetPassword(email, password)
    signInWithEmailAndPassword(email, password);

    e.target.reset();
  };

  const resetPassword = () => {
    const email = document.getElementById("userEmail").value;
    console.log(email);
    sendPasswordResetEmail(auth, email).then(() => {
      toast("sent email");
    });
  };

  return (
    <div className="hero min-h-screen bg-blue-100 pt-16 px-3">
      {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> */}
        <div className="flex justify-center">
          <div className="hidden lg:block">
            <img className="w-[400px]" src={login} alt="" />
          </div>
          <div className="w-96 bg-white px-10 py-12">
            <h1 className="text-center text-2xl text-blue-500 font-bold ">Login Account</h1>
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  id="userEmail"
                  type="email"
                  placeholder="Enter your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <button
                    onClick={resetPassword}
                    className="text-red-500 label-text-alt link link-hover"
                  >
                    Forgot password?
                  </button>

                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="hover:bg-blue-500 py-3 rounded-xl bg-gray-500">LOGIN</button>
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/signUp" className="text-blue-600 hover:underline">
                    Join Now
                  </Link></p>
              
              </div>
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

export default Login;
