import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Edit from "../Documentation/Edit";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import { fetchRoutes } from "../../Features/Routes/routesSlice";
import { useNavigate } from "react-router";
import QuizQuestions from "../Quiz/QuizQuestions";

const MyClasses = () => {
  // const navigate = useNavigate();
  const { isLoading, routes} = useSelector((state) => state.routes);
  const [finalContent, setFinalContent] = useState("Installation");
  const [quizContent, setQuizContent] = useState("");
  const [blogs, setBlogs] = useState([]);

  // const handleQuiz2 = (name) => {
  //   navigate(`/quiz/${name}`);
  //   console.log(name);
  // };


  useEffect(() => {
    async function Data() {
      const fetchData = await fetch("http://localhost:5000/doc");
      const res = await fetchData.json();
      const con = res.filter((a) => a.nestedRoute === finalContent);

      setBlogs(con[0]);
    }
    Data();
  }, [finalContent]);

  const handleNext = () => {
    const finalId = parseInt(blogs?.docID) + 1;
    console.log(finalId);
    const q = routes.map((route) => route.content);

    for (let i = 0; i < q.length; i++) {
      const q1 = q[i].filter((a) => parseInt(a.idNumber) === finalId);
      console.log(q1);
      setFinalContent(q1[0].nestedRoute);
    }
    
  };


  return (
    <div className="mt-20">
      <div className="min-h-screen py-8 lg:py-20 px-4 lg:px-36 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-3/4">
          {isLoading && <Loading />}
          {blogs && <Edit blogs={blogs} />}
          {/* {quizContent && <QuizQuestions name={quizContent} />} */}

          <div className="flex justify-between my-10">
            <button
              className="px-4 py-2 bg-gray-500
                rounded font-bold text-white"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded bg-blue-500 font-bold text-white"
            >
              Next
            </button>
          </div>
        </div>
        <div className="lg:w-1/4">
          {routes.map((route) => (
            <div key={route._id} className="collapse collapse-arrow">
              <input type="checkbox" />
              <div className="collapse-title  font-medium ">
                <p>{route.title}</p>
                {/* <Link to="/module">{route.title}</Link> */}
              </div>
              <div className="collapse-content pl-10">
                <ul className="leading-10">
                  {route?.content.map((a, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setFinalContent(a.nestedRoute);
                        setQuizContent("");
                      }}
                    >
                      <p className="cursor-pointer">{a.nestedRoute}</p>
                      {/* <Link to={`/module/${a.pathRoute}`}>{a.nestedRoute}</Link> */}
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        setQuizContent(route.title);
                        setFinalContent("");
                      }}
                    >
                      Quiz
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
