import React from "react";
import niloy from '../../../assets/admin/niloy.jpg';
import sajol from '../../../assets/admin/sajol.jpg';
import habib from '../../../assets/admin/habib.jpg';
import zillur from '../../../assets/admin/zillur.jpg';
import sayed from '../../../assets/admin/sayed.png';

const AdminPanel = () => {
    return (
        <div className='bg-white'>
            <div className="allAdmin pt-5 pb-10">
                <div><img className="mask mask-circle  lg:w-52 md:w-52  md:h-52 image-full lg:h-52 w-48 h-48   my-4 rounded-full border-8 hover:border-indigo-300  mx-auto" src={sajol} alt="" /><p className='mx-auto w-60 rounded-md py-1 navStyle text-center'>Sajol Bhadra <br /> Team Leader <br />MERN Stack Developer</p></div>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 ' >
                    <div><img className="mask mask-circle  lg:w-52 md:w-52  md:h-52  image-full lg:h-52 w-48 h-48  my-4 rounded-full border-8 hover:border-indigo-300 mx-auto" src={sayed} alt="" /> <p className='mx-auto w-60 rounded-md py-1 navStyle text-center'>Abu Sayed  <br />MERN Stack Developer</p></div>
                    <div><img className="mask mask-circle  lg:w-52 md:w-52  md:h-52 image-full lg:h-52 w-48 h-48  my-4 rounded-full border-8 hover:border-indigo-300 mx-auto" src={niloy} alt="" /><p className='mx-auto w-60 rounded-md py-1 navStyle text-center'>Niloy Dey  <br />MERN Stack Developer</p></div>
                    <div><img className="mask mask-circle  lg:w-52 md:w-52  md:h-52 image-full lg:h-52 w-48 h-48  my-4 rounded-full border-8 hover:border-indigo-300 mx-auto" src={habib} alt="" /><p className='mx-auto w-60 rounded-md py-1 navStyle text-center'>Mahiuddin Habib  <br />MERN Stack Developer</p></div>
                    <div><img className=" lg:w-20 md:w-52  md:h-52 image-full lg:h-20 w-48 h-48  my-4 rounded-full border-8 hover:border-indigo-300  mx-auto" src={zillur} alt="" /><p className='mx-auto w-60 rounded-md py-1 navStyle text-center'>Md. Zillur  <br />MERN Stack Developer</p></div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;