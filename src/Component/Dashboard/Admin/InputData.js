import React from 'react';

const InputData = () => {
    return (
        <div className='bg-white py-2'>
            {/* 
            Create route section 
            if you are create a new route so work it section
            */}
            <div className='my-6 p-10 createRouteSection flex justify-center items-center  navStyle '>
                <div className='text-center '>
                    <p className='my-2'>If you are create a new route </p>
                    <form action="">
                        <input type="text" placeholder="Enter Route Name" class="input input-bordered  w-full max-w-xs" />
                        <button class="btn button btn-outline mt-2">create Route</button>
                    </form>
                </div>
            </div>



            {/* 
            update route data section
            if you are update  route  data so work it section
            */}
            <div className='createRouteSection navStyle py-10 flex justify-center items-center '>
                <div className='text-center'>
                    <p className='my-2'>If you are update route data </p>
                    <form action="">
                        <input type="text" placeholder="Enter Route Name" class="input input-bordered  w-80  max-w-xs  my-1" /><br />
                        <input type="text" placeholder="Enter Topic Title" class="input input-bordered  w-full max-w-xs my-1" /><br />
                        <input type="text" placeholder="Enter Topic Description" class="input input-bordered  w-full max-w-xs my-1" /><br />
                        <input type="text" placeholder="Enter Topic Example/code" class="input input-bordered  w-full max-w-xs my-1" /><br />
                        <button class="btn button btn-outline mt-2 ">submit data</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InputData;