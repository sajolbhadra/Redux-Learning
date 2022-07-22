import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import auth from '../../firebase/firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './../../Shared/SocialLogin/SocialLogin';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(email, password)

        e.target.reset();
    }


    return (
        <div class="hero min-h-screen bg-green-50 pt-10 px-3">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body ">
                    <h1 className='text-center font-bold '>Login Account</h1>
                    <form onSubmit={handleSignIn}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                                <Link to="/signUp" className='text-sm text-blue-600' >sign up</Link>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <input type="submit" class="btn " value="Login"></input>
                        </div>
                    </form>

                    {/* social login process start here  */}
                    <div class="divider text-blue-600">Continue Social Account</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;