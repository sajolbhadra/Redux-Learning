import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes } from "../../Services/actions/routesActions";
import { Link } from "react-router-dom";
import Edit from "../Documentation/Edit";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";

const MyClasses = () => {
  const dispatch = useDispatch();
  const { isLoading, routes, error } = useSelector((state) => state.routesR);
  const [content, setContent] = useState("");


  useEffect(() => {
    dispatch(getRoutes());
  }, [dispatch]);

  return (
    <div className="mt-20">
      <div className="min-h-screen py-8 lg:py-20 px-4 lg:px-36 flex flex-col lg:flex-row gap-10">
        <div className="lg:w-3/4">
            {isLoading && <Loading/>}
          <Edit content={content} />
        </div>
        <div className="lg:w-1/4">
          {routes.map((route) => (
            <div className="collapse collapse-arrow">
              <input type="checkbox" />
              <div className="collapse-title  font-medium ">
                <p>{route.title}</p>
                {/* <Link to="/module">{route.title}</Link> */}
              </div>
              <div className="collapse-content pl-10">
                <ul className="leading-10">
                  {route.content.map((a) => (
                    <li onClick={() => setContent(a.nestedRoute)}>
                      <p className="cursor-pointer">{a.nestedRoute}</p>
                      {/* <Link to={`/module/${a.pathRoute}`}>{a.nestedRoute}</Link> */}
                    </li>
                  ))}
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
