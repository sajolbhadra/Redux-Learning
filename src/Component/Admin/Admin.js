import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content ">
                {/* <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <h1 className='lg:text-3xl md:text-3xl text-xl pt-20 mb-4 text-center font-medium font-mono' >Welcome Our Admin Dashboard</h1>
                <Outlet></Outlet>
            </div>

            <div className="drawer-side  bg-green-50 ">
                <label for="my-drawer-2" className="drawer-overlay "></label>
                <ul className="menu p-4 overflow-y-auto w-80  text-base-content pt-20 font-mono">
                    <li><Link to="/admin">Admin Panel</Link></li>
                    <li><Link to="/admin/inputData" >Input Data</Link></li>
                    <li><Link to="/admin/manageData" >Manage Data</Link></li>
                    <li><Link to="/admin/allUser" >All User</Link></li>
                </ul>

            </div>


        </div>
    );
};

export default Admin;