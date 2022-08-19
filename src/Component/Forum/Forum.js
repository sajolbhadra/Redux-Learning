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
        <div className='my-20'>
            {
                discussions.map((discussion, index) => <Discussion
                    key={index}
                    discussion={discussion}
                ></Discussion>)
            }
        </div>
    );
};

export default Forum;