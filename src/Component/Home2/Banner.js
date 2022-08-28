import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import banner from "../../assets/banner-alt.png";
import background from "../../assets/banner.jpg";
import auth from "../../firebase/firebase.init";
import {useDispatch, useSelector } from "react-redux";
import { handleIsTrue } from "../../Features/Boolean/booleanSlice";

const Banner = () => {
  const { isBg } = useSelector((state) => state.boolean);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(isBg);
  
  const [user] = useAuthState(auth);

  const bannerCode = (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row items-center  justify-around lg:justify-between mx-2 my-4 lg:my-0 lg:mx-12">
        <div className="text w-full lg:w-1/2  text-center lg:text-left pt-4 ">
          <h1 className="text-5xl text-primary uppercase font-bold notranslate">Redux</h1>
          <p className=" text-2xl  font-bold  pt-2 ">
            A Predictable State Container for JS Apps
          </p>
          <p className="py-2">
            Reading this documentation and taking the quiz afterwards will win
            you some gems. through which he or she can obtain a learning redux
            certificate.
          </p>

          {
            !user ? <button className="btn button btn-outline " onClick={()=>{ navigate("/gettingStarted");
            dispatch(handleIsTrue());
            }}>
            Explore
          </button> : <button className="btn button btn-outline " onClick={()=> navigate("/myClasses")}>
            Go to Your ClassRoom
          </button>
          }
          
        </div>
        <div className="w-full lg:w-1/2">
          <img src={banner} className="lg:ml-auto" alt="" />
        </div>
      </div>
    </>
  );

  return (
    <div>
      {isBg === false ? (
        <div
          style={{
            background: `url(${background}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        >
          {bannerCode}
        </div>
      ) : (
        <div>{bannerCode}</div>
      )}
    </div>
  );
};

export default Banner;
