import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import auth from './../../firebase/firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
// import { toast } from 'react-toastify';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { sendEmailVerification } from 'firebase/auth';
const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);



    // form submit action

    const handleCreateAccount = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });


        // toast.success('account created successfully. verification email sent')


        e.target.reset();
    }

    const [signInWithGithub,
        gitUser,
        gitLoading,
        gitError
    ] = useSignInWithGithub(auth);

    if (gitUser) {
        console.log(gitUser.email);
    }




    const [
        signInWithGoogle,
        guser,
        gloading,
        gerror
    ] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
    }
    return (
        <div className="hero min-h-screen bg-green-50 py-20 px-3">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body leading-3">
                    <h1 className='text-center font-bold '>Create Account</h1>
                    <form onSubmit={handleCreateAccount}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Enter your name" className=" input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Enter  password" className="input input-bordered" required />
                            <label className="label">
                                <p className='text-sm '>Already have an account please</p>
                                <Link to="/login" className='text-sm text-blue-600' >Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            {
                                loading ? <button type="button" className="btn" disabled>

                                    Creating account
                                </button> : <input type="submit" value="Sign Up " className="btn "></input>
                            }
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

export default SignUp;