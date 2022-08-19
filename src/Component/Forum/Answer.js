import React from 'react';

const Answer = ({ answer }) => {
    const { name, date, ans, picture } = answer;
    // console.log(name, date, ans);
    return (
        <div className='mt-3 m-2 p-4 border-2'>
            <div className='flex items-center'>
                <img className='w-[35px] h-[35px] rounded-full inline' src={picture} alt="" />
                <div className='ml-3'>
                    <h3>{name}</h3>
                    <p className=' text-xs'>{date}</p>
                </div>
            </div>
            <p>{ans}</p>
        </div>
    );
};

export default Answer;