import React, { useEffect, useState } from "react";

function Edit({content}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const url = "https://redux-learning-server.herokuapp.com/doc";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const con = data.filter(a => a.nestedRoute === content);
        setBlogs(con);
      });
  }, [content]);

  return (
    <div className="text-lg">
      <div>
      {blogs.map((blog) => (
        <div dangerouslySetInnerHTML={{ __html: blog.content}} />
      ))}
      </div>
    </div>
  );
}

export default Edit;
