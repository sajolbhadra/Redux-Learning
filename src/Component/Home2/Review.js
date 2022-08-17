import React from 'react';
import ReactStars from 'react-stars';

const Review = ({ review }) => {
    const { name, picture, rating, comment } = review;
    const ratingStars = {
        size: 25,
        value: rating,
        edit: false
    };
    return (
        <div className='flex flex-row min-h-[200px] items-center mx-4 mb-6 p-6 rounded-xl shadow-xl reviewStyle'>
            <div>
                <img src={picture} alt="" className='w-[70px] rounded-full' />
                <h2 className='font-semibold mt-1'>{name}</h2>
            </div>
            <div className='ml-4 overflow-hidden'>
                <ReactStars {...ratingStars} />
                <p className=''>{comment.slice(0, 80)}...</p>
            </div>
        </div>
    );
};

export default Review;