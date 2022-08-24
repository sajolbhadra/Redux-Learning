import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddQuiz = () => {
  const [added, setAdded] = useState([]);
  const [addedOption, setAddedOption] = useState([]);
  const [totalAdded, setTotalAdded] = useState([]);
  const [totalAddedOptions, setTotalAddedOptions] = useState([]);
  const { register, getValues, setValue } = useForm();

  const handleAddOptions = (e) => {
    e.preventDefault();

    const option = getValues("option");

    setAddedOption(option);
    setValue("option", "");
  };

  console.log(totalAddedOptions);

  const handleAdd = (e) => {
    e.preventDefault();
    const questionNo = getValues("questionNo");
    const question = getValues("question");
    const answer = getValues("answer");
    setAdded({
      id: questionNo,
      question: question,
      options: totalAddedOptions,
      ans: answer,
    });
    setValue("questionNo", "");
    setValue("question", "");
    setValue("option", "");
    setValue("answer", "");
  };

  useEffect(() => {
    if (added.length !== 0 && totalAdded.indexOf(added) === -1) {
      totalAdded.push(added);
    }
    if (
      addedOption.length !== 0 &&
      totalAddedOptions.indexOf(addedOption) === -1
    ) {
      totalAddedOptions.push(addedOption);
    }
    setTotalAddedOptions(totalAddedOptions);

    setTotalAdded(totalAdded);
  }, [totalAdded, added, addedOption, totalAddedOptions]);

  console.log(added);
  console.log(totalAdded);

  const onSubmit = (e) => {
    e.preventDefault();
    const quizTitle = getValues("quizName");
    const docID = getValues("idNumber");

    const variables = {
      route: "",
      nestedRoute: quizTitle,
      content: totalAdded,
      docID: docID,
    };

    axios.post("http://localhost:5000/doc", variables).then((response) => {
      if (response) {
        toast("Quiz Created!");
        setValue("quizName", "");
        setValue("idNumber", "");
      }
    });
  };

  return (
    <div>
      <div className="py-10  m-24 createRouteSection flex justify-center items-center  navStyle ">
        <div>
          <p className=" text-center text-3xl">Create A new Quiz </p>
          <form action="" className="flex gap-20 items-center">
            <div>
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
              <label htmlFor="">Quiz Name</label>
              <input
                type="text"
                placeholder="Enter Quiz Name"
                className="input input-bordered  w-full my-3"
                {...register("quizName", {
                  required: { value: true },
                })}
              />
              <br />
              <button
                onClick={onSubmit}
                className="btn button btn-outline mt-2"
              >
                Create Quiz
              </button>
            </div>

            <div className="w-3/4">
              <label className="text-center" htmlFor="">
                ID
              </label>
              <input
                type="text"
                placeholder="Enter Question No."
                className="input input-bordered  w-full my-3"
                {...register("questionNo", {
                  required: { value: true },
                })}
              />
              <br />
              <label className="text-center" htmlFor="">
                Question
              </label>
              <input
                type="text"
                placeholder="Enter Question"
                className="input input-bordered  w-full my-3"
                {...register("question", {
                  required: { value: true },
                })}
              />{" "}
              <br />
              <div className="grid grid-cols-1 gap-2 items-center">
                <div>
                  <label className="text-center" htmlFor="">
                    Option
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Option"
                    className="input input-bordered  w-full my-3"
                    {...register("option", {
                      required: { value: true },
                    })}
                  />{" "}
                </div>
                <button
                  className="btn btn-outline button mb-8"
                  onClick={handleAddOptions}
                >
                  Add Questions
                </button>
              </div>
              <label className="text-center" htmlFor="">
                Answer
              </label>
              <input
                type="text"
                placeholder="Enter Answer"
                className="input input-bordered  w-full my-3"
                {...register("answer", {
                  required: { value: true },
                })}
              />{" "}
              <br />
              <button className="btn btn-outline button" onClick={handleAdd}>
                Add Questions
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
