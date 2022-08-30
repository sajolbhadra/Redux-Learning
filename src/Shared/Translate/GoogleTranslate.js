import React from 'react';
import './GoogleTranslate.css';
import { TbLanguage } from "react-icons/tb";
import { useState } from 'react';

const GoogleTranslate = () => {
    const [transOpen, setTransOpen]=useState(false);
    return (
            <div className='flex flex-row items-center'>
                <div id="google_translate_element" className={`md: mt-[14px] ${transOpen? 'block':'hidden'}`}></div>
                <button className='text-[28px] w-[30px] h-[30px] border rounded-full mx-3' onClick={()=>setTransOpen(!transOpen)}><TbLanguage></TbLanguage></button>
            </div>
    );
};

export default GoogleTranslate;