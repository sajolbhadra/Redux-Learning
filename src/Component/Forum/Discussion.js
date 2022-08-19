import React from 'react';
import { useState } from 'react';
import Answer from './Answer';

const Discussion = ({ discussion }) => {
    const { name, picture, date, question } = discussion;
    const [isAnsOpen, setIsAnsOpen] = useState(false);
    const [isQueOpen, setIsQueOpen] = useState(false);

    let noOfAns;
    discussion?.answers ? noOfAns = discussion?.answers.length : noOfAns = 0;

    const handlePostQuestion = () => {
        setIsQueOpen(!isQueOpen);
    }
    return (
        <div className='relative my-12 mx-4 bg-fuchsia-300'>
            <div className='grid grid-flow-row-dense grid-cols-10 '>
                <div className='col-span-10 lg:col-span-2 pt-8 pl-4 bg-slate-300'>
                    <img className='w-[70px] rounded-full absolute top-[-35px]' src={picture} alt="" />
                    <h2>{name}</h2>
                    <p className='text-sm'>{date}</p>
                </div>
                <div className='col-span-10 lg:col-span-8 p-4 pb-0 bg-green-200'>
                    {question}
                    <p className='mt-4 mb-2 text-right'>{noOfAns} answer(s)</p>
                </div>
            </div>


            <div style={{ display: isAnsOpen ? 'block' : 'none' }}>
                {
                    noOfAns ? discussion?.answers.map((answer, index) => <Answer
                        key={index}
                        answer={answer}
                    ></Answer>) : ''
                }
            </div>
            <button className='mx-4 my-1' style={{ display: noOfAns ? 'inline' : 'none' }} onClick={() => { setIsAnsOpen(!isAnsOpen) }}>{isAnsOpen ? 'Hide Answers' : 'Show Answers'}</button>
            <button className='mx-4 my-1' onClick={() => { setIsQueOpen(!isQueOpen) }}>Answer This Question</button>
            <div class="form-control w-full md:w-2/5 p-4" style={{ display: isQueOpen ? 'flex' : 'none' }}>
                <textarea class="textarea textarea-bordered h-24" placeholder="Answer This Question"></textarea>
                <button onClick={handlePostQuestion} class="btn btn-sm w-[70px] mt-4">post</button>
            </div>
        </div>
    );
};

export default Discussion;