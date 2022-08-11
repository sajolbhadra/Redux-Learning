import React from 'react';
import './Certificate.css';
import { exportComponentAsPNG } from "react-component-export-image";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
import moment from 'moment';
import certificate from '../../assets/Certificate/certificate.png';

const Certificate = () => {
    const [user] = useAuthState(auth);
    // console.log(user)
    let certificateWrapper = React.createRef();
    const downloadCertificate = event => {
        event.preventDefault();
        exportComponentAsPNG(certificateWrapper, {
            fileName: `certificate_${user.displayName}`,
            html2CanvasOptions: { backgroundColor: null }
        });
    }

    return (
        <div className='my-6'>
            <div className='overflow-auto touch-auto'>
                <div id="certificateWrapper" ref={certificateWrapper} className='relative w-[1000px] mx-auto my-6 shadow-lg'>
                    <p style={{left: '50%',transform: 'translate(-50%, 0)'}} className='certificate absolute top-[360px] text-5xl font-extrabold'>{user?.displayName}</p>
                    <p style={{left: '50%',transform: 'translate(-50%, 0)'}} className='text-black absolute top-[450px] text-[25px] font-semibold text-center w-[630px]'>in brilliantly completing the redux documentations and holding 10% marks in the quizzes</p>
                    <p className='certificate absolute bottom-[75px] left-[200px] text-[22px] font-extrabold'>{moment().format('LL')}</p>
                    <p className='certificate absolute bottom-[75px] right-[200px] text-[22px] font-extrabold'>Authorities</p>
                    <img src={certificate} alt="Certificate" />
                </div>
            </div>
            <button className='btn button btn-outline block mx-auto' onClick={downloadCertificate}>Download</button>
        </div>
    );
};

export default Certificate;