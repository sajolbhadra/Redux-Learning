import React, { useContext, useEffect, useRef} from "react";
import axios from "axios";
import { AllContext } from "../../../context/AllProvider";

const AddRouteContent = () => {
  const { routes, setRoutes, nestedRoute, setNestedRoute } = useContext(AllContext);
  const inputRoute = useRef(null);
  const inputNestedRoute = useRef(null);
  const inputContent = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5000/routes", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRoutes(data);
      });
  }, [setRoutes]);

  const handleRoutes = (e) => {
    e.preventDefault();
    const route = inputRoute.current.value;

    const remaining = routes?.filter((a) => a.title === route);
    const nested = remaining?.map((a) => a.content);
    setNestedRoute(nested[0]);
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const route = inputRoute.current.value;
    const nestedRoute = inputNestedRoute.current.value;
    const doc = inputContent.current.value;

    const content = {
      route: route,
      nestedRoute: nestedRoute,
      content: doc
    };
    console.log(content);

    axios
      .post("https://redux-learning-server.herokuapp.com/doc", content)
      .then((response) => {
        if (response) {
          alert("Post Created!");
        }
      });
      e.target.reset();
  };

  return (
    <div>
      <div className="createRouteSection navStyle py-10 flex justify-center items-center ">
        <div>
          <p className="my-2 text-center text-3xl">Add Nested Route Content</p>
          <form className="w-full" onSubmit={handleSubmit}>
            <label>Route Name</label> <br />
            <input
              onChange={(e) => handleRoutes(e)}
              placeholder="Select Route"
              className="border-2 p-2 rounded mb-3 w-full"
              type="text"
              name="route"
              list="routeName"
              ref={inputRoute}
            />
            <datalist id="routeName">
              {routes?.map((route) => (
                <option value={route.title} />
              ))}
            </datalist>{" "}
            <br />

            <label>Nested Route Name</label> <br />
            <input
              
              placeholder="Select Nested Route"
              className="border-2 p-2 rounded mb-3 w-full"
              type="text"
              name="nestedRoute"
              list="nestedRouteName"
              ref={inputNestedRoute}
            />
            <datalist id="nestedRouteName">
              {nestedRoute?.map((a) => (
                <option value={a.nestedRoute} />
              ))}
            </datalist>{" "}
            <br />

            <label>Type Your Content</label> <br />
            <textarea className="w-full h-[300px]" ref={inputContent}/>

            <button class="btn button btn-outline mt-2">
              Add Content
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRouteContent;
