import React from "react";
import Banner from "./Banner";
import Step from "./Step";
import { useDispatch, useSelector } from "react-redux";
import HomeModal from "../Modals/HomeModal";

const Home2 = () => {
  return (
    <div>
      {/* {modalState && <HomeModal />} */}
      <Banner></Banner>
      <Step></Step>
    </div>
  );
};

export default Home2;
