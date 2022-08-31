import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import SocialLogin from "./../../Shared/SocialLogin/SocialLogin";
import login from "../../assets/Login/Nice to Have You Back.png";
import './login.css'
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {

  //   const loginPupUp = document.querySelector('login-popup')
  //  window.addEventListener("load", function(){
  //     setTimeout(function() {
  //       loginPupUp.classList.add('show');
  //     }, 1000)
  //  })

  // const [show, setShow] = useState(false)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setShow(true)
  //   }, 6000)
  // }, [setShow])
  // const handle = ()=>{
  //   setShow(false);
  // }

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const onSubmit = async () => {
    const email = getValues("email");
    const password = getValues("password");
    await signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const resetPassword = async () => {
    const email = getValues("email");
    await sendPasswordResetEmail(email);
    if (email) {
      toast("Sent email");
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-red-500 my-2">{error?.message}</p>;
  }


  return (
    <div className="min-h-screen bg-blue-100 pt-28 px-3">
      {/* <button onClick={handle}  id="close" className="btn ">X</button> */}
      {/* <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> */}
      <div  className="login-popup flex justify-center ">
        <div className="hidden md:block lg:block">
          <img className="w-[400px]" src={login} alt="" />
        </div>
        <div className="w-full lg:w-96 md:w-80 navStyle px-2 py-2 lg:px-10 lg:py-4">
          <div className="flex ">
            <h1 className="text-center text-2xl font-bold ">Login Account</h1>
            
          </div>
          {/* <form onSubmit={handleSignIn}>
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
                  className="text-blue-400 label-text-alt link link-hover"
                >
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-outline button  font-bold py-3 rounded-xl bg-gray-500"
              >
                LOGIN
              </button>
            </div>
            <div className="my-3">
              <p>
                New Here?{" "}
                <Link to="/signUp" className="text-blue-600 hover:underline">
                  Join Now
                </Link>
              </p>
            </div>
          </form> */}
          {errorMessage}
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input w-full input-bordered max-w-xs text-black font-bold"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </label>
            </div>

            <div className="form-control   w-full ">
              <label className="label">
                <span className="label-text  text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered form-control w-full max-w-xs text-black"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must have 6 characters",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </label>
            </div>
            <label className="label">
              <button
                onClick={resetPassword}
                className="text-blue-400 label-text-alt link link-hover"
              >
                Forgot password?
              </button>
            </label>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-outline button  font-bold py-3 rounded-xl bg-gray-500"
              >
                LOGIN
              </button>
            </div>
            <div className="my-3">
              <p className="text-white">
                New Here?{" "}
                <Link to="/signUp" className="text-blue-600 hover:underline">
                  Join Now
                </Link>
              </p>
            </div>
          </form>

          {/* social login process start here  */}
          <div className="divider  text-lg">or</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
