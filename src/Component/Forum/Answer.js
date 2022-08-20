import React from 'react';

const Answer = ({ answer }) => {
    const { name, date, ans, picture } = answer;
    // console.log(name, date, ans);
    return (
        <div className='mt-3 m-2 p-4' style={{boxShadow: '2px 2px 9px 0.1px #B3C5EF'}}>
            <div className='flex items-center'>
                <img className='w-[35px] h-[35px] rounded-full inline' src={picture} alt="" />
                <div className='ml-3'>
                    <h3>{name}</h3>
                    <p className=' text-xs'>{date}</p>
                </div>
            </div>
            <p className='ml-8 my-2 bg-gray-200 rounded p-3'>{ans}</p>
        </div>
    );
};

export default Answer;