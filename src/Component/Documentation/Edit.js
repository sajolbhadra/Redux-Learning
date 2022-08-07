import React, { useEffect, useState } from "react";
import DOMPurify from 'dompurify';

function Edit() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/doc";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="text-xl">
      <body>
      {blogs.map((blog) => (
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content)}} />
      ))}
      </body>

      <img src="" alt="" />
    </div>
  );
}

export default Edit;
