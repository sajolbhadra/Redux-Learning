import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

const HomeModal = () => {
    
  const [user] = useAuthState(auth);
  return (
    <div>
      <input type="checkbox" id="homeModal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations {user?.email}!
          </h3>
          <p class="py-4">
            You have got 10 gems for joining us!
          </p>
          <p>Use those gems properly</p>
          <div class="modal-action">
            <label for="homeModal" class="btn">
              Collect
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeModal;
