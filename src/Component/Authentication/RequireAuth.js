import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error2] =
    useSendEmailVerification(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  if (!user.emailVerified) {
    return (
      <div className="flex flex-col items-center min-h-screen mt-40">
        <p className="text-2xl text-red-500">Your Email is not verified!!</p>
        <p className="text-lg text-green-300 my-6">Please Verified your email address.</p>
        <button className="btn btn-primary my-4"
          onClick={async () => {
            await sendEmailVerification(user?.user?.email);
            toast("Sent email");
          }}
        >
          Verify email
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
