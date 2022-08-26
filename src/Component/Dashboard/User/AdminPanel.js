import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import niloy from '../../../assets/admin/niloy.png';
import sajol from '../../../assets/admin/sajol.png';
import habib from '../../../assets/admin/habib.png';
import zillur from '../../../assets/admin/zillur.jpg';
import sayed from '../../../assets/admin/sayed.png';

const AdminPanel = () => {
    return (
        <div className=' p-4 border-2 bg-white'>
            <div className="allAdmin pt-5 pb-10">

                {/* cards */}


                <h2 className="text-3xl text-center uppercase font-bold">Meet Our Team</h2>
                <div className="w-8 h-1 mx-auto bg-[#4D4C7D]"></div>


                <div className='p-4 flex flex-wrap gap-4'>

                    {/* ------------------------------ */}
                    <div class="card shadow-md lg:w-[30%] mx-auto relative bg-base-100 ">

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
                    <div class="card shadow-md lg:w-[30%] mx-auto relative bg-base-100 ">

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
                    <div class="card shadow-md lg:w-[30%] mx-auto relative bg-base-100 ">

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
                    <div class="card shadow-md lg:w-[30%] mx-auto relative bg-base-100 ">

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
                    <div class="card shadow-md lg:w-[30%] mx-auto relative bg-base-100 ">

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