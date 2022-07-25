import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import auth from '../../firebase/firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    const handlGithubLogin = () => {
        signInWithGithub();
    }
    return (
        <div className="form-control grid grid-cols-2 ">
            <button onClick={handleGoogleLogin} className="m-1  text-xl  btn bg-base-100 text-black hover:text-white"> <FaGoogle /> </button>
            {/* <button className="m-1 text-xl  btn bg-base-100 text-black hover:text-white"> <FaFacebook /> </button> */}
            <button onClick={handlGithubLogin} className="m-1 text-xl  btn bg-base-100 text-black hover:text-white"> <FaGithub /> </button>
        </div>
    );
};

export default SocialLogin;