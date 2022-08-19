import React, { useEffect, useState } from "react";

function Edit({ content }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/doc";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const con = data.filter((a) => a.nestedRoute === content);
        setBlogs(con);
      });
  }, [content]);

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
