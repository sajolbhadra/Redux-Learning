import React, { useEffect, useState } from "react";

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
      <body>
      {blogs.map((blog) => (
        <div dangerouslySetInnerHTML={{ __html: blog.content}} />
      ))}
      </body>
    </div>
  );
}

export default Edit;
