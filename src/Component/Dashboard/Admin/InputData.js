import React, { useState } from "react";
// import QuillEditor from '../../Editor/QuillEditor';
import AddNestedRoute from "./AddNestedRoute";
import AddRouteContent from "./AddRouteContent";

const InputData = () => {
  const [route, setRoute] = useState(false);
  const [routeContent, setRouteContent] = useState(false);

  return (
    <div className="mt-4">
      <div className="createRouteSection navStyle py-2 flex justify-around ">
        <button className="btn button btn-outline" onClick={()=> {setRoute(true); setRouteContent(false)}}>Add Route</button>

        <button className="btn button btn-outline" onClick={()=> {setRoute(false);setRouteContent(true)}}>Add Route Content</button>
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
