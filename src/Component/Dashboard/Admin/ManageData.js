import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoutes } from "../../../Features/Routes/routesSlice";
import Loading from "../../../Shared/Loading/Loading";

const ManageData = () => {
  const { isLoading, routes } = useSelector((state) => state.routes);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://redux-learning-server.herokuapp.com/routes/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(fetchRoutes());
        });
    }
  };

  return (
    <div className="flex justify-center">
      <table className="table navStyle my-8">
        <thead>
          <th className="text-center text-2xl">Routes</th>
          <th className="text-center text-2xl">Delete</th>
        </thead>
        <tbody>
            {isLoading && <Loading/>}
          {routes.map((a) => (
            <tr>
              <td>{a.title}</td>
              <td>
                <button
                  onClick={() => handleDelete(a._id)}
                  className="btn btn-outline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageData;
