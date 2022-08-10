import React from 'react';
import { useContext } from 'react';
import { AllContext } from './../../context/AllProvider';

const ShowAnswer = () => {
    const { totalAns, questions } = useContext(AllContext);
    return (
        <div className="min-h-screen ">
            <h2 className="text-3xl font-bold text-center text-primary mt-24">Answer</h2>

            {
                questions.map(q => <div className='card shadow-lg p-4'>

                    {q.id}. {q.question}
                    <input type="checkbox" name="" id="" /> <label htmlFor="">dfsd</label>
                </div>)
            }

        </div>
    );
};

export default ShowAnswer;