import React, { useEffect, useState } from "react";
import DOMPurify from 'dompurify';

function Edit() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = "https://redux-learning-server.herokuapp.com/doc";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="text-xl">
      <div>
      {blogs.map((blog) => (
        <div key={blog._id} dangerouslySetInnerHTML={{ __html: blog.content}} />
      ))}
      </div>
    </div>
  );
}

export default Edit;
