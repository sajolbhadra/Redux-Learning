import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import niloy from '../../../assets/admin/niloy.png';
import sajol from '../../../assets/admin/sajol.png';
import habib from '../../../assets/admin/habib.png';
import zillur from '../../../assets/admin/zillur.jpg';
import sayed from '../../../assets/admin/sayed.png';

const AdminPanel = () => {
    return (
        <div className='bg-white'>
            <div className="allAdmin pt-5 pb-10">
                {/* <div><img className="mask mask-circle  lg:w-52 md:w-52  md:h-52 image-full lg:h-52 w-48 h-48   my-4 rounded-full border-8 hover:border-indigo-300  mx-auto" src={sajol} alt="" /><p className='mx-auto w-60 rounded-md py-1 navStyle text-center'>Sajol Bhadra <br /> Team Leader <br />MERN Stack Developer</p></div>

                <div className='grid lg:grid-cols-2 md:grid-cols-2 ' >
                    <div><img className="mask mask-circle  lg:w-52 md:w-52  md:h-52  image-full lg:h-52 w-48 h-48  my-4 rounded-full border-8 hover:border-indigo-300 mx-auto" src={sayed} alt="" /> <p className='mx-auto w-60 rounded-md py-1 navStyle text-center'>Abu Sayed  <br />MERN Stack Developer</p></div>
                    <div><img className="mask mask-circle  lg:w-52 md:w-52  md:h-52 image-full lg:h-52 w-48 h-48  my-4 rounded-full border-8 hover:border-indigo-300 mx-auto" src={niloy} alt="" /><p className='mx-auto w-60 rounded-md py-1 navStyle text-center'>Niloy Dey  <br />MERN Stack Developer</p></div>
                    <div><img className="mask mask-circle  lg:w-52 md:w-52  md:h-52 image-full lg:h-52 w-48 h-48  my-4 rounded-full border-8 hover:border-indigo-300 mx-auto" src={habib} alt="" /><p className='mx-auto w-60 rounded-md py-1 navStyle text-center'>Mahiuddin Habib  <br />MERN Stack Developer</p></div>
                    <div><img className=" lg:w-20 md:w-52  md:h-52 image-full lg:h-20 w-48 h-48  my-4 rounded-full border-8 hover:border-indigo-300  mx-auto" src={zillur} alt="" /><p className='mx-auto w-60 rounded-md py-1 navStyle text-center'>Md. Zillur  <br />MERN Stack Developer</p></div>
                </div> */}




                {/* cards */}


                <h2 className="text-3xl text-center uppercase font-bold">Meet Our Team</h2>


                <div className='p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>

                    {/* ------------------------------ */}
                    <div class="card w-[90%] mx-auto relative bg-base-100 ">

                        <div className='w-[100px] z-20 overflow-hidden rotate-45 mt-12 bg-white h-[100px] mx-auto border-2'>
                            <img className='-rotate-45 ' src={sajol} alt="" />
                        </div>
                        <div className="w-[90px] h-[90px] rotate-45 bg-[#4D4C7D] mx-auto mt-[-110px] z-0"></div>
                        <div class="card-body">
                            <h2 className="text-[#4D4C7D] text-center text-3xl font-bold uppercase">Sajol Bhadra</h2>
                            <p className="text-center font-bold">Team Leader</p>
                            <div className="w-8 h-1 bg-[#4D4C7D] mx-auto"></div>
                            <p className="text-center text-slate-500">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions justify-center">
                                <a className='text-[#4D4C7D] text-2xl' href="#">
                                    <FaFacebookF />
                                </a>
                                <a className='text-[#4D4C7D] text-2xl' href="#">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------ */}

                    {/* ------------------------------ */}
                    <div class="card w-[90%] mx-auto relative bg-base-100 ">

                        <div className='w-[100px] z-20 overflow-hidden rotate-45 mt-12 bg-white h-[100px] mx-auto border-2'>
                            <img className='-rotate-45 ' src={zillur} alt="" />
                        </div>
                        <div className="w-[90px] h-[90px] rotate-45 bg-[#4D4C7D] mx-auto mt-[-110px] z-0"></div>
                        <div class="card-body">
                            <h2 className="text-[#4D4C7D] text-center text-3xl font-bold uppercase">MD. Zillur Rahman</h2>
                            <p className="text-center font-bold">Team Member</p>
                            <div className="w-8 h-1 bg-[#4D4C7D] mx-auto"></div>
                            <p className="text-center text-slate-500">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions justify-center">
                                <a className='text-[#4D4C7D] text-2xl' href="#">
                                    <FaFacebookF />
                                </a>
                                <a className='text-[#4D4C7D] text-2xl' href="#">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------ */}

                    {/* ------------------------------ */}
                    <div class="card w-[90%] mx-auto relative bg-base-100 ">

                        <div className='w-[100px] z-20 overflow-hidden rotate-45 mt-12 bg-white h-[100px] mx-auto border-2'>
                            <img className='-rotate-45 ' src={sayed} alt="" />
                        </div>
                        <div className="w-[90px] h-[90px] rotate-45 bg-[#4D4C7D] mx-auto mt-[-110px] z-0"></div>
                        <div class="card-body">
                            <h2 className="text-[#4D4C7D] text-center text-3xl font-bold uppercase">Abu Sayeed</h2>
                            <p className="text-center font-bold">Team Member</p>
                            <div className="w-8 h-1 bg-[#4D4C7D] mx-auto"></div>
                            <p className="text-center text-slate-500">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions justify-center">
                                <a className='text-[#4D4C7D] text-2xl' href="#">
                                    <FaFacebookF />
                                </a>
                                <a className='text-[#4D4C7D] text-2xl' href="#">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------ */}

                    {/* ------------------------------ */}
                    <div class="card w-[90%] mx-auto relative bg-base-100 ">

                        <div className='w-[100px] z-20 overflow-hidden rotate-45 mt-12 bg-white h-[100px] mx-auto border-2'>
                            <img className='-rotate-45 ' src={niloy} alt="" />
                        </div>
                        <div className="w-[90px] h-[90px] rotate-45 bg-[#4D4C7D] mx-auto mt-[-110px] z-0"></div>
                        <div class="card-body">
                            <h2 className="text-[#4D4C7D] text-center text-3xl font-bold uppercase">Niloy Day</h2>
                            <p className="text-center font-bold">Team Member</p>
                            <div className="w-8 h-1 bg-[#4D4C7D] mx-auto"></div>
                            <p className="text-center text-slate-500">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions justify-center">
                                <a className='text-[#4D4C7D] text-2xl' href="#">
                                    <FaFacebookF />
                                </a>
                                <a className='text-[#4D4C7D] text-2xl' href="#">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------ */}

                    {/* ------------------------------ */}
                    <div class="card w-[90%] mx-auto relative bg-base-100 ">

                        <div className='w-[100px] z-20 overflow-hidden rotate-45 mt-12 bg-white h-[100px] mx-auto border-2'>
                            <img className='-rotate-45 w-[200%]' src={habib} alt="" />
                        </div>
                        <div className="w-[90px] h-[90px] rotate-45 bg-[#4D4C7D] mx-auto mt-[-110px] z-0"></div>
                        <div class="card-body">
                            <h2 className="text-[#4D4C7D] text-center text-3xl font-bold uppercase">Mahiuddin Habib</h2>
                            <p className="text-center font-bold">Team Member</p>
                            <div className="w-8 h-1 bg-[#4D4C7D] mx-auto"></div>
                            <p className="text-center text-slate-500">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions justify-center">
                                <a className='text-[#4D4C7D] text-2xl' href="#">
                                    <FaFacebookF />
                                </a>
                                <a className='text-[#4D4C7D] text-2xl' href="#">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------ */}



                </div>
            </div>
        </div>
    );
};

export default AdminPanel;