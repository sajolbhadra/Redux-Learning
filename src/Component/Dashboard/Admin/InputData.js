import React from 'react';

const InputData = () => {
    return (
        <div>
            {/* 
            Create route section 
            if you are create a new route so work it section
            */}
            <div className='py-10 mb-5 createRouteSection flex justify-center items-center  bg-red-200 '>
                <div className='text-center '>
                    <p className='my-2'>If you are create a new route </p>
                    <form action="">
                        <input type="text" placeholder="Enter Route Name" class="input input-bordered  w-full max-w-xs" />
                        <button class="btn btn-outline mt-2">create Route</button>
                    </form>
                </div>
            </div>



            {/* 
            update route data section
            if you are update  route  data so work it section
            */}
            <div className='createRouteSection bg-blue-200 py-10 flex justify-center items-center '>
                <div className='text-center'>
                    <p className='my-2'>If you are update route data </p>
                    <form action="">
                        <input type="text" placeholder="Enter Route Name" class="input input-bordered  w-80  max-w-xs  my-1" /><br />
                        <input type="text" placeholder="Enter Topic Title" class="input input-bordered  w-full max-w-xs my-1" /><br />
                        <input type="text" placeholder="Enter Topic Description" class="input input-bordered  w-full max-w-xs my-1" /><br />
                        <input type="text" placeholder="Enter Topic Example/code" class="input input-bordered  w-full max-w-xs my-1" /><br />
                        <button class="btn btn-outline mt-2 ">submit data</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputData;