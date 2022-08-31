import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';
import login from "../../assets/Login/Nice to Have You Back.png";
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';
import './login.css'
const LoginPopUp = () => {

  return (
    <div>
      {/* <label for="my-modal-3" class="btn modal-button">open modal</label> */}

      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPopUp;