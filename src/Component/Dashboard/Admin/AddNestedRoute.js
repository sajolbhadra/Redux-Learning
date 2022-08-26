import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { postRoutes } from "../../../Features/Routes/routesSlice";

const AddNestedRoute = () => {
  const [added, setAdded] = useState([]);
  const [totalAdded, setTotalAdded] = useState([]);
  const { register, getValues, setValue } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    if (added.length !== 0 && totalAdded.indexOf(added) === -1) {
      totalAdded.push(added);
    }

    setTotalAdded(totalAdded);
  }, [totalAdded, added]);

  const handleAdd = (e) => {
    e.preventDefault();
    const nestedRoute = getValues("nestedRoute");
    const pathRoute = getValues("pathName");
    const idNumber = getValues("idNumber");
    setAdded({ nestedRoute: nestedRoute, pathRoute: pathRoute,idNumber:idNumber });
    setValue("nestedRoute", "");
    setValue("pathName", "");
    setValue("idNumber", "");
  };

  console.log(added);
  console.log(totalAdded);

  const onSubmit = (e) => {
    e.preventDefault();
    const route = getValues("route");

    const variables = {
      title: route,
      content: totalAdded,
    };

    dispatch(postRoutes(variables));
    toast("Nested Route Created!");
    setValue("route", "");
    setValue("nestedRoute", "");

    // axios.post("http://localhost:5000/routes", variables).then((response) => {
    //   if (response) {
    //     toast("Nested Route Created!");
    //     setValue("route", "");
    //     setValue("nestedRoute", "");
    //   }
    // });
  };

  return (
    <div>
      <div className="py-32 mx-2  px-2 createRouteSection flex justify-center items-center  navStyle ">
        <div>
          <p className="my-2 text-center text-3xl ">
            Create A new Nested Route{" "}
          </p>
          <form action="" className="text-black">
            <label htmlFor="">Route Name</label>
            <input
              type="text"
              placeholder="Enter Route Name"
              className="input input-bordered  w-full my-3"
              {...register("route", {
                required: { value: true },
              })}
            />
            <br />
            <label className="text-center" htmlFor="">
              ID
            </label>
            <input
              type="number"
              placeholder="Enter id number"
              className="input input-bordered w-full my-3"
              {...register("idNumber", {
                required: { value: true },
              })}
            />{" "}
            <br />
            <label className="text-center" htmlFor="">
              Nested Route Name
            </label>
            <input
              type="text"
              placeholder="Enter Nested Route Name"
              className="input input-bordered  w-full my-3"
              {...register("nestedRoute", {
                required: { value: true },
              })}
            />{" "}
            <br />
            <label className="text-center" htmlFor="">
              Path Name
            </label>
            <input
              type="text"
              placeholder="Enter Nested path Name"
              className="input input-bordered  w-full my-3"
              {...register("pathName", {
                required: { value: true },
              })}
            />{" "}
            <div className="flex justify-between">
              <button className="btn btn-outline button " onClick={handleAdd}>
                First ADD
              </button>

              <button onClick={onSubmit} className="btn button btn-outline ">
                Finally Deploy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNestedRoute;
