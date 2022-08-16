import { useContext, useEffect, useState } from "react";
import { AllContext } from "../context/AllProvider";

const UseRoutes = () => {
    // const { routes, setRoutes} = useContext(AllContext);
    
  const [routes, setRoutes] = useState([]);

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
  return [routes, setRoutes];
};

export default UseRoutes;
