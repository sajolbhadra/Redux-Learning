import React from 'react';
import './GoogleTranslate.css';
import { TbLanguage } from "react-icons/tb";

const GoogleTranslate = () => {
    return (
            <div className='relative text-center mx-4'>
                <div id="google_translate_element"></div>
                <button className='absolute left-[50%] top-[50%] z-[-1] text-[25px] border rounded-full' style={{transform: 'translate(-50%, -50%)'}}><TbLanguage></TbLanguage></button>
            </div>
    );
};

export default GoogleTranslate;