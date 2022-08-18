import React from 'react';
import Answer from './Answer';

const Discussion = ({ discussion }) => {
    const { name, picture, date, question, answers } = discussion;

    const noOfAns = answers.length;
    return (
        <div className='mb-6'>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{noOfAns}</p>
            {
                answers.map((answer, index) => <Answer
                    key={index}
                    answer={answer}
                ></Answer>)
            }
        </div>
    );
};

export default Discussion;