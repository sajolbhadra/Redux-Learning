import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
const SignUp = () => {
    return (
        <div class="hero min-h-screen bg-green-50">

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                        <label class="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            <Link to="/login" className='text-sm text-blue-600' >Login</Link>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn ">Login</button>
                    </div>

                    {/* social login process start here  */}
                    <div class="divider text-blue-600">Continue Social Account</div>
                    <div className="form-control grid grid-cols-3  ">
                        <button className="m-1  text-xl  btn bg-base-100 text-black hover:text-white"> <FaGoogle/> </button>
                        <button className="m-1 text-xl  btn bg-base-100 text-black hover:text-white"> <FaFacebook/> </button>
                        <button className="m-1 text-xl  btn bg-base-100 text-black hover:text-white"> <FaGithub/> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;