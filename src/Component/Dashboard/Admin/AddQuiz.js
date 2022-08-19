import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddQuiz = () => {
  const [added, setAdded] = useState([]);
  const [totalAdded, setTotalAdded] = useState([]);
  const { register, getValues, setValue } = useForm();

  const handleAdd = (e) => {
    e.preventDefault();
    const questionNo = getValues("questionNo");
    const question = getValues("question");
    const optionA = getValues("optionA");
    const optionB = getValues("optionB");
    const optionC = getValues("optionC");
    const optionD = getValues("optionD");
    const answer = getValues("answer");
    setAdded({ id:questionNo, question:question, optionA:optionA, optionB:optionB, optionC:optionC, optionD:optionD, ans:answer});
    setValue("questionNo","");
    setValue("question","");
    setValue("optionA","");
    setValue("optionB","");
    setValue("optionC","");
    setValue("optionD","");
    setValue("answer","");
  };

  useEffect(() => {
    if (added.length !== 0 && totalAdded.indexOf(added) === -1) {
      totalAdded.push(added);
    }

    setTotalAdded(totalAdded);
  }, [totalAdded, added]);

  console.log(added);
  console.log(totalAdded);

  const onSubmit = (e) => {
    e.preventDefault();
    const quizTitle = getValues("quizName");

    const variables = {
      title: quizTitle,
      questions: totalAdded,
    };

    axios.post("https://redux-learning-server.herokuapp.com/quizzes", variables).then((response) => {
      if (response) {
        toast("Quiz Created!");
        setValue("quizName", "");
      }
    });
  };

  return (
    <div>
      <div className="py-10 createRouteSection flex justify-center items-center  navStyle ">
        <div>
          <p className=" text-center text-3xl">Create A new Quiz </p>
          <form action="" className="flex gap-20 items-center">
            <div>
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
              <button onClick={onSubmit} className="btn button btn-outline mt-2">
                create Quiz 
              </button>
            </div>

            <div>
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
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-center" htmlFor="">
                    Option A
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Option A"
                    className="input input-bordered  w-full my-3"
                    {...register("optionA", {
                      required: { value: true },
                    })}
                  />{" "}
                </div>

                <div>
                  <label className="text-center" htmlFor="">
                    Option B
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Option B"
                    className="input input-bordered  w-full my-3"
                    {...register("optionB", {
                      required: { value: true },
                    })}
                  />{" "}
                </div>
                <div>
                  <label className="text-center" htmlFor="">
                    Option C
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Option C"
                    className="input input-bordered  w-full my-3"
                    {...register("optionC", {
                      required: { value: true },
                    })}
                  />{" "}
                </div>
                <div>
                  <label className="text-center" htmlFor="">
                    Option D
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Option D"
                    className="input input-bordered  w-full my-3"
                    {...register("optionD", {
                      required: { value: true },
                    })}
                  />{" "}
                </div>
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
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
