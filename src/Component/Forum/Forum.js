import React, { useEffect, useState } from 'react';
import Discussion from './Discussion';

const Forum = () => {
    const [discussions, setDiscussions] = useState([]);
    const [isAskOpen, setIsAskOpen] = useState(false);

    useEffect(() => {
        fetch('forumDiscussion.json')
            .then(res => res.json())
            .then(data => setDiscussions(data))
    }, [])

    const handlePostQuestion = (isAskOpen) => {

        // close for mobile
        if (isAskOpen) {
            setIsAskOpen(!isAskOpen);
        }
    }
    return (
        <div className='grid grid-flow-row-dense grid-cols-10 mt-20'>
            <div className='col-span-10 lg:col-span-8'>
                {
                    discussions.map((discussion, index) => <Discussion
                        key={index}
                        discussion={discussion}
                    ></Discussion>)
                }
            </div>
            <div className='relative col-span-2 hidden md:block overViewStyle'>
                <div className='md:fixed top-[80px] md:w-[20%] p-4'>
                    <h2>Confused about any topic?</h2>
                    <h3 className='mt-1'>Ask A Question</h3>
                    <div class="form-control mt-1">
                        <textarea class="textarea textarea-bordered h-24" placeholder="Write your question here"></textarea>
                        <button onClick={handlePostQuestion} class="btn btn-sm w-[70px] mt-4">post</button>
                    </div>
                </div>
            </div>

            {/* top ask button in mobile */}
            <div className='block md:hidden col-span-10 order-first m-2 overViewStyle'>
                <button className='w-full p-3 font-semibold rounded-lg text-white bg-[#020060]' onClick={()=>{setIsAskOpen(!isAskOpen)}}>{isAskOpen? 'Ask Later' : 'Ask a Question'}</button>
                <div className='p-2' style={{ display: isAskOpen ? 'block' : 'none' }}>
                    <h2>Confused about any topic?</h2>
                    <h3 className='mt-1'>Ask A Question</h3>
                    <div class="form-control mt-1">
                        <textarea class="textarea textarea-bordered h-24" placeholder="Write your question here"></textarea>
                        <button onClick={() => handlePostQuestion(isAskOpen)} class="btn btn-sm w-[70px] mt-4">post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forum;