import React, { useEffect, useState } from 'react';
import Discussion from './Discussion';

const Forum = () => {
    const [discussions, setDiscussions] = useState([]);
    useEffect(() => {
        fetch('forumDiscussion.json')
            .then(res => res.json())
            .then(data => setDiscussions(data))
    }, [])
    return (
        <div className='grid grid-flow-row-dense grid-cols-10 my-20'>
            <div className='col-span-10 lg:col-span-8'>
                {
                    discussions.map((discussion, index) => <Discussion
                        key={index}
                        discussion={discussion}
                    ></Discussion>)
                }
            </div>
            <div className='relative col-span-10 lg:col-span-2 order-first md:order-last bg-orange-200'>
                <div className='md:fixed top-[80px]'>
                    <h2>Have You any Question?</h2>
                    <h3>Ask your Question</h3>
                </div>
            </div>
        </div>
    );
};

export default Forum;