import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Edit from "../Documentation/Edit";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import { fetchRoutes } from "../../Features/Routes/routesSlice";

const MyClasses = () => {
  const dispatch = useDispatch();
  const { isLoading, routes, error } = useSelector((state) => state.routes);
  const [content, setContent] = useState("Getting Started With Redux");

  useEffect(() => {
    dispatch(fetchRoutes());
  }, [dispatch]);

  console.log(routes);

  return (
    <div className="mt-20">
      <div className="min-h-screen py-8 lg:py-20 px-4 lg:px-36 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-3/4">
          {isLoading && <Loading />}
          <Edit content={content} />
          <div className="flex justify-between my-10">
            <button
              className="px-4 py-2 bg-gray-500
                rounded font-bold text-white"
            >
              Previous
            </button>

            <button className="px-4 py-2 rounded bg-blue-500 font-bold text-white">
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
                    <li key={index} onClick={() => setContent(a.nestedRoute)}>
                      <p className="cursor-pointer">{a.nestedRoute}</p>
                      {/* <Link to={`/module/${a.pathRoute}`}>{a.nestedRoute}</Link> */}
                    </li>
                  ))}
                  <li>
                    <p>Quiz</p>
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
