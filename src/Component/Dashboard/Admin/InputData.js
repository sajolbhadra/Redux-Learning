import React, { useState } from "react";
// import QuillEditor from '../../Editor/QuillEditor';

import { useDispatch, useSelector } from "react-redux";
import { handleRoute, handleRouteContent } from "../../../Features/Boolean/booleanSlice";
import AddNestedRoute from "./AddNestedRoute";
import AddRouteContent from "./AddRouteContent";

const InputData = () => {
  const { route,routeContent } = useSelector((state) => state.boolean);

  const dispatch = useDispatch();

  console.log(route);
  console.log(routeContent);

  return (
    <div className="">
      <div className="createRouteSection navStyle py-2 flex justify-around ">
        <button className="btn button btn-outline" onClick={()=> dispatch(handleRoute())}>Add Route</button>

        <button className="btn button btn-outline" onClick={()=> dispatch(handleRouteContent())}>Add Route Content</button>
      </div>
      <div>
        {route === true && <AddNestedRoute/>}
      </div>
      <div>
        {routeContent === true && <AddRouteContent/>}
      </div>

      {/* Editor side */}
      {/* <div className='w-[700px] m-8 flex flex-col items-center'>
            <div>
                <p className="text-center text-2xl">Editor</p>
            </div>
                <QuillEditor
                    placeholder={"Start Posting Something"}
                    onEditorChange={onEditorChange}
                    onFilesChange={onFilesChange}
                />

            <form action="" onSubmit={handleSubmit}>
                <input type="submit" className='px-4 py-2 bg-blue-500 text-white font-bold uppercase my-8' value="Submit" />
            </form>
        </div> */}
    </div>
  );
};

export default InputData;
