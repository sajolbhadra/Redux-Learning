import React from 'react';
import Answer from './Answer';

const Discussion = ({ discussion }) => {
    const { name, picture, date, question } = discussion;

    let noOfAns;
    discussion?.answers ? noOfAns = discussion?.answers.length : noOfAns=0;
    
    return (
        <div className='mb-6 bg-fuchsia-300'>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{noOfAns}</p>
            {
             noOfAns? discussion?.answers.map((answer, index) => <Answer
                    key={index}
                    answer={answer}
                ></Answer>):''
            }
            <div class="form-control">
                <textarea class="textarea textarea-bordered h-24" placeholder="Answer This Question"></textarea>
                <button class="btn btn-outline">post</button>
            </div>
        </div>
    );
};

export default Discussion;