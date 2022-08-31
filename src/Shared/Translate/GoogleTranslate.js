import React from 'react';
import './GoogleTranslate.css';
import { TbLanguage } from "react-icons/tb";
import { Helmet } from 'react-helmet';

const GoogleTranslate = () => {
    return (
        <>
            <div id="google_translate_element"></div>
            
        </>
    );
};

export default GoogleTranslate;
// className={`md: mt-[14px] mr-3 ${transOpen? 'block':'hidden'}`}
//<button className='text-[28x] w-[30px] h-[30px] border rounded-full mr-3'
                //         onClick={()=>setTransOpen(!transOpen)}
                //         style={{ boxShadow: transOpen ? "2px 2px 9px 0.1px #B3C5EF" : "" }}
                //         ><TbLanguage></TbLanguage></button> 