import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

const HomeModal = () => {
    
  const [user] = useAuthState(auth);
  return (
    <div>
      <input type="checkbox" id="homeModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations {user?.email}!
          </h3>
          <p className="py-4">
            You have got 10 gems for joining us!
          </p>
          <p>Use those gems properly</p>
          <div className="modal-action">
            <label for="homeModal" className="btn">
              Collect
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeModal;
