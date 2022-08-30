import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Edit from "../Documentation/Edit";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import { Link } from "react-router-dom";
import { fetchRoutes } from "../../Features/Routes/routesSlice";
import { useNavigate } from "react-router";
import QuizQuestions from "../Quiz/QuizQuestions";
import { handleSelectedAnsReset } from "../../Features/Answer/selectedAnsSlice";
import { handleTotalAnsReset } from "../../Features/Answer/totalAnsSlice";

const MyClasses = () => {
  // const navigate = useNavigate();
  // const content = window.localStorage.getItem("finalContent");
  // console.log(content);
  const dispatch = useDispatch();
  const { isLoading, routes } = useSelector((state) => state.routes);
  const [finalContent, setFinalContent] = useState("Define Redux");
  const [blogs, setBlogs] = useState([]);
  const [total, setTotal] = useState(0);
  const [final, setFinal] = useState(1);

  //const handleQuiz2 = (name) => {
  //   navigate(`/quiz/${name}`);
  //   console.log(name);
  // };

  const q = routes.map((route) => route.content);

  useEffect(() => {
    async function Data() {
      const fetchData = await fetch("https://redux-learning-server.herokuapp.com/doc");
      const res = await fetchData.json();
      const con = res.filter((a) => a.nestedRoute === finalContent);
      setTotal(res.length);
      setBlogs(con[0]);
    }
    Data();
    // window.localStorage.setItem("finalContent", blogs.nestedRoute);
  }, [finalContent, blogs.nestedRoute]);

  const progress = ()=>{
    const pro = (final/total)*100;
    return pro;
  }

  const handleNext = () => {
    const finalId = parseInt(blogs?.docID) + 1;
    console.log(finalId);
    setFinal(finalId);

    for (let i = 0; i < routes.length; i++) {

      const q1 = q[i];
      for (let j = 0; j < q1.length; j++){
        const q2 = q1[j];
        if(parseInt(q2.idNumber) === finalId){
          setFinalContent(q2.nestedRoute)
        }
      }

    }
    window.scrollTo(0, 0);
    dispatch(handleSelectedAnsReset());
    dispatch(handleTotalAnsReset());
  };
  console.log(routes.length);

  return (
    <div className="mt-20">
      <div className="min-h-screen py-8 lg:py-12 px-4 lg:px-20 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-3/4">
          <p className="text-4xl font-bold mb-6">Redux Documentation</p>
          {isLoading && <Loading />}
          {blogs && <Edit blogs={blogs} />}

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
        <div className="lg:w-[35%]">
          <p className="flex items-center text-xl font-bold gap-2">
            Course Content:{" "}
            <progress
              className="progress progress-info w-40 mt-1"
              value={progress()}
              max="100"
            ></progress>{" "}
            {progress().toFixed(2)}%
          </p>
          {routes.map((route) => (
            <div
              key={route._id}
              className="collapse collapse-arrow bg-gray-200 rounded mt-2"
            >
              <input type="checkbox" />
              <div className="collapse-title  font-medium ">
                <p>{route.title}</p>
                {/* <Link to="/module">{route.title}</Link> */}
              </div>
              <div className="collapse-content pl-6">
                <ul className="leading-10 ">
                  {route?.content.map((a, index) => (
                    <li
                      className="bg-white my-1 p-2 rounded"
                      key={index}
                      onClick={() => {
                        setFinalContent(a.nestedRoute);
                      }}
                    >
                      <Link to={`/myClasses/${a.pathRoute}`}>
                        {a.nestedRoute}
                      </Link>
                      {/* <p className="cursor-pointer">{a.nestedRoute}</p> */}
                      {/* <Link to={`/module/${a.pathRoute}`}>{a.nestedRoute}</Link> */}
                    </li>
                  ))}
                  {/* <li>
                    <button
                      onClick={() => {
                        setQuizContent(route.title);
                        setFinalContent("");
                      }}
                    >
                      Quiz
                    </button>
                  </li> */}
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
