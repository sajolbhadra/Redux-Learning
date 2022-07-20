import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
const SignUp = () => {
    return (
        <div class="hero min-h-screen bg-green-50 py-20 px-3">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body leading-3">
                    <h1 className='text-center font-bold '>Create Account</h1>
                    <form>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" class=" input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Enter your email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Enter  password" class="input input-bordered" />
                            <label class="label">
                                <p className='text-sm '>Already have an account please</p>
                                <Link to="/login" className='text-sm text-blue-600' >Login</Link>
                            </label>
                        </div>
                        <div class="form-control mt-2">
                            <input type="submit" value="Sign Up " class="btn "></input>
                        </div>
                    </form>

                    {/* social login process start here  */}
                    <div class="divider text-blue-600">Continue Social Account</div>
                    <div className="form-control grid grid-cols-3  ">
                        <button className="mx-1  text-xl  btn bg-base-100 text-black hover:text-white"> <FaGoogle /> </button>
                        <button className="mx-1 text-xl  btn bg-base-100 text-black hover:text-white"> <FaFacebook /> </button>
                        <button className="mx-1 text-xl  btn bg-base-100 text-black hover:text-white"> <FaGithub /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;