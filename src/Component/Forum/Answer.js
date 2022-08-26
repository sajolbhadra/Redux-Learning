import React from 'react';
import userPhoto from '../../assets/icon/user1.jpg';

const Answer = ({ answer }) => {
    const { name, date, ans, picture } = answer;
    // console.log(shadow);
    return (
        <div className='mt-3 m-2 p-2 rounded-md' style={{boxShadow: '1px 1px 10px 0.1px #B3C5EF'}}>
            <div className='flex items-center'>
                <img className='w-[35px] h-[35px] rounded-full inline' src={picture? picture: userPhoto} alt="" />
                <div className='ml-3 notranslate'>
                    <h3>{name}</h3>
                    <p className=' text-xs'>{date}</p>
                </div>
            </div>
            <p className='ml-8 rounded p-3'>{ans}</p>
        </div>
    );
};

export default Answer;