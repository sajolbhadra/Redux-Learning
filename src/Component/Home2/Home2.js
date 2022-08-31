// import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import LoginPopUp from '../Authentication/LoginPopUp';
import Banner from './Banner';
import Overview from './Overview';
import Reviews from './Reviews';
import Step from './Step';


const Home2 = () => {
    return (
        <div>
          {/* {modalState && <HomeModal />} */}
            <Banner></Banner>
            {/* <LoginPopUp></LoginPopUp> */}
            <Step></Step>
            <Overview></Overview>
            <Reviews></Reviews>
        </div>
    );
};

export default Home2;
