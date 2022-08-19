import React from 'react';
import { useState } from 'react';
import Answer from './Answer';

const Discussion = ({ discussion }) => {
    const { name, picture, date, question } = discussion;
    const [isAnsOpen, setIsAnsOpen] = useState(false);
    const [isQueOpen, setIsQueOpen] = useState(false);

    let noOfAns;
    discussion?.answers ? noOfAns = discussion?.answers.length : noOfAns=0;
    
    return (
        <div className='mb-6 bg-fuchsia-300'>
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{noOfAns}</p>
            
            
            <div style={{ display: isAnsOpen? 'block': 'none'}}>
            {
             noOfAns? discussion?.answers.map((answer, index) => <Answer   
                    key={index}
                    answer={answer}
                ></Answer>):''
            }
            </div>
            <button style={{ display: noOfAns? 'inline': 'none'}} onClick={()=>{setIsAnsOpen(!isAnsOpen)}}>{isAnsOpen?'Hide Answers':'Show Answers'}</button>
            <button onClick={()=>{setIsQueOpen(!isQueOpen)}}>Answer This Question</button>
            <div class="form-control"  style={{ display: isQueOpen? 'block': 'none'}}>
                <textarea class="textarea textarea-bordered h-24" placeholder="Answer This Question"></textarea>
                <button class="btn btn-outline">post</button>
            </div>
        </div>
    );
};

export default Discussion;