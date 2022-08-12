import React from 'react';
import { useNavigate } from 'react-router';

const QuizInstructions = () => {
const navigate = useNavigate();

    const handleQuiz = () => {
        navigate('/quiz');
    }

    return (
        <div className='bg-blue-100 min-h-screen flex justify-center items-center'>
            <div className='navStyle rounded p-10'>
            <p className="text-4xl text-center mb-6">Exam Instructions</p>
            <ul style={{listStyle: "square"}}>
                <li>You will get 10 mins for every quiz</li>
                <li>You can select an option just once. After that you can not change your answers.</li>
                <li>Exam will be held in full-screen.</li>
                <li>Don't try to switch tab. If yo do, your exam will be terminated.</li>
            </ul>
            <button onClick={handleQuiz} className='py-2 px-4 button btn btn-outlined rounded-xl hover:bg-gray-500 w-full text-white my-4'>Start Exam</button>
            </div>
        </div>
    );
};

export default QuizInstructions;