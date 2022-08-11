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
            html2CanvasOptions: { backgroundColor: null }
        });
    }

    return (
        <div>
            <div>
                <div id="certificateWrapper" ref={certificateWrapper} className='relative w-[1000px]'>
                    <p style={{left: '50%',transform: 'translate(-50%, 0)'}} className='certificate absolute top-[360px] text-5xl font-extrabold text-center'>{user?.displayName}</p>
                    <p className='certificate absolute bottom-[75px] left-[200px] text-[22px] font-extrabold'>{moment().format('LL')}</p>
                    <p className='certificate absolute bottom-[75px] right-[200px] text-[22px] font-extrabold'>Authorities</p>
                    <img src={certificate} alt="Certificate" />
                </div>
            </div>
            <button onClick={downloadCertificate}>Download</button>
        </div>
    );
};

export default Certificate;