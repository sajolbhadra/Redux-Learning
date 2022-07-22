import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import auth from './../../firebase/firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
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


        toast.success('account created successfully. verification email sent')


        e.target.reset();
    }

    if (user) {
        console.log(user);
    }
    return (
        <div class="hero min-h-screen bg-green-50 py-20 px-3">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body leading-3">
                    <h1 className='text-center font-bold '>Create Account</h1>
                    <form onSubmit={handleCreateAccount}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Enter your name" class=" input input-bordered" required />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Enter your email" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Enter  password" class="input input-bordered" required />
                            <label class="label">
                                <p className='text-sm '>Already have an account please</p>
                                <Link to="/login" className='text-sm text-blue-600' >Login</Link>
                            </label>
                        </div>
                        <div class="form-control mt-2">
                            {
                                loading ? <button type="button" class="btn" disabled>

                                    Creating account
                                </button> : <input type="submit" value="Sign Up " class="btn "></input>
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