import React, { useState } from 'react';
// import QuillEditor from '../../Editor/QuillEditor';
// import axios from 'axios';

const InputData = () => {
    const [content, setContent] = useState("");
    const [files, setFiles] = useState([])

    const onEditorChange = (value) => {
        setContent(value);
        console.log(content);
    }

    const onFilesChange = (files) => {
        setFiles(files);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        // const variables = {
        //     content: content
        // }

        // axios.post('http://localhost:5000/doc', variables)
        //     .then(response => {
        //         if (response) {
        //             alert('Post Created!');
        //             setContent("");
        //         }
        //     })
    }


    return (

        <div>
            <div className='bg-white py-2'>
       
                <div className='my-6 p-10 createRouteSection flex justify-center items-center  navStyle '>
                    <div className='text-center '>
                        <p className='my-2'>If you are create a new route </p>
                        <form action="">
                            <input type="text" placeholder="Enter Route Name" class="input input-bordered  w-full max-w-xs" />
                            <button class="btn button btn-outline mt-2">create Route</button>
                        </form>
                    </div>
                </div>



                <div className='createRouteSection navStyle py-10 flex justify-center items-center '>
                    <div className='text-center'>
                        <p className='my-2'>If you are update route data </p>
                        <form action="">
                            <input type="text" placeholder="Enter Route Name" class="input input-bordered  w-80  max-w-xs  my-1" /><br />
                            <input type="text" placeholder="Enter Topic Title" class="input input-bordered  w-full max-w-xs my-1" /><br />
                            <input type="text" placeholder="Enter Topic Description" class="input input-bordered  w-full max-w-xs my-1" /><br />
                            <input type="text" placeholder="Enter Topic Example/code" class="input input-bordered  w-full max-w-xs my-1" /><br />
                            <button class="btn button btn-outline mt-2 ">submit data</button>
                        </form>
                    </div>
                </div>
            </div>


{/*        
            <form action="" onSubmit={handleSubmit}>
                <input type="submit" className='px-4 py-2 bg-blue-500 text-white font-bold uppercase my-8' value="Submit" />
            </form> */}
        </div>
    );
};

export default InputData;