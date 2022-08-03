import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import auth from '../../firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const location = useLocation();
    const navigate = useNavigate();

    
    let from = location.state?.from?.pathname || '/';

    if(user || gitUser){
        navigate(from, {replace: true});
    }

    if(user || gitUser){
        navigate('/home');
    }
    return (
        <div className="form-control grid grid-cols-2 ">
            <button onClick={() => signInWithGoogle()} className="m-1  text-xl  btn bg-base-100 text-black hover:text-white"> <FaGoogle /> </button>
            {/* <button className="m-1 text-xl  btn bg-base-100 text-black hover:text-white"> <FaFacebook /> </button> */}
            <button onClick={() => signInWithGithub()} className="m-1 text-xl  btn bg-base-100 text-black hover:text-white"> <FaGithub /> </button>
        </div>
    );
};

export default SocialLogin;