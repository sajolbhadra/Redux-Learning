import React from 'react';

const Answer = ({answer}) => {
    const {name, date, ans} = answer;
    // console.log(name, date, ans);
    return (
        <div className='bg-blue-200 mb-3'>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{ans}</p>
        </div>
    );
};

export default Answer;