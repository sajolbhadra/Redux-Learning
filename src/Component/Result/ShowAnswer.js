import React from 'react';
import { useContext } from 'react';
import { AllContext } from './../../context/AllProvider';

const ShowAnswer = () => {
    const { totalAns, questions } = useContext(AllContext);
    return (
        <div className="min-h-screen ">
            <h2 className="text-3xl font-bold text-center text-primary mt-24">Answer</h2>

            {
                questions.map(q => <div className='card w-[90%] lg:w-[50%] mx-auto shadow-lg p-4'>

                    <p className="font-bold text-primary">{q.id}. {q.question}</p>
                    {
                        [q.optionA, q.optionB, q.optionC, q.optionD,].map(option => option === q.ans ? <p className='border bg-green-400 my-2 ml-4 p-2'>{option}</p> : <p className='border my-2 ml-4 p-2'>{option}</p>)
                    }
                </div>)
            }

        </div>
    );
};

export default ShowAnswer;