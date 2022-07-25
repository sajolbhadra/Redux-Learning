import React from 'react';

const AllUser = () => {
    return (
        <div>

            {/* when dynamically loaded data then using map method and using one card  and other 2 card is delete is this page  */}


            <h1 className='text-xl font-bold  ml-10 '>All User</h1>
            <div className='flex justify-center items-center'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:m-8 justify-center items-center'>
                    <div className='card bg-red-200 w-80 h-32 p-3 m-3'>
                        <h1>Name</h1>
                        <p>Email</p>
                        <p className='mt-3 '>
                            <button class="btn btn-sm mr-3 ">Details</button>
                            <button class="btn btn-sm ">Delete user</button>
                        </p>
                    </div>

                    <div className='card bg-red-200 w-80 h-32 p-3 m-3'>
                        <h1>Name</h1>
                        <p>Email</p>
                        <p className='mt-3 '>
                            <button class="btn btn-sm mr-3 ">Details</button>
                            <button class="btn btn-sm ">Delete user</button>
                        </p>
                    </div>

                    <div className='card bg-red-200 w-80 h-32 p-3 m-3 '>
                        <h1>Name</h1>
                        <p>Email</p>
                        <p className='mt-3 '>
                            <button class="btn btn-sm mr-3 ">Details</button>
                            <button class="btn btn-sm ">Delete user</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUser;