import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import auth from '../../firebase/firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
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
        // console.log(email, password)
        // resetPassword(email, password)
        signInWithEmailAndPassword(email, password)

        e.target.reset();
    }

    const resetPassword = () => {
        const email = document.getElementById('userEmail').value 
        console.log(email);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('sent email');
            })
    }


    return (
        <div className="hero min-h-screen bg-green-50 pt-10 px-3">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body ">
                    <h1 className='text-center font-bold '>Login Account</h1>
                    <form onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' id='userEmail' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <button onClick={resetPassword} className=" label-text-alt link link-hover" >Forgot password?</button>

                                <Link to="/signUp" className='text-sm text-blue-600' >sign up</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn " value="Login"></input>
                        </div>
                    </form>

                    {/* social login process start here  */}
                    <div className="divider text-blue-600">Continue Social Account</div>
                    <div className="form-control grid grid-cols-3  ">
                        <button className="m-1  text-xl  btn bg-base-100 text-black hover:text-white"> <FaGoogle /> </button>
                        <button className="m-1 text-xl  btn bg-base-100 text-black hover:text-white"> <FaFacebook /> </button>
                        <button className="m-1 text-xl  btn bg-base-100 text-black hover:text-white"> <FaGithub /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;