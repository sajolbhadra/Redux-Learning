import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Edit() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/doc';
        fetch(url)
        .then(res=> res.json())
        .then(data => setBlogs(data));
    }, [])

    const renderCards = blogs.map((blog, index) => (
        <div>
            {blog}
        </div>
    )
        
    )

    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
                {renderCards}
        </div>
    )
}

export default Edit;