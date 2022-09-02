// import { Footer } from 'antd/lib/layout/layout';
import { Footer } from "antd/lib/layout/layout";
import React from "react";
import Banner from "./Banner";
import Overview from "./Overview";
import Reviews from "./Reviews";
import Step from "./Step";

const Home2 = () => {
  return (
    <div>
      {/* {modalState && <HomeModal />} */}
      <Banner></Banner>
      {/* <LoginPopUp></LoginPopUp> */}
      <Step></Step>
      <Overview></Overview>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home2;
