import React from 'react';
import { exportComponentAsPNG } from "react-component-export-image";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.init';
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
            <div id="downloadWrapper" ref={certificateWrapper}>
                <div id="certificateWrapper" className='relative'>
                    <p className='absolute top-[150px]' style={{color: 'black'}}>{user?.displayName}</p>
                    <img src={certificate} alt="Certificate" />
                </div>
            </div>
            <button onClick={downloadCertificate}>Download</button>
        </div>
    );
};

export default Certificate;