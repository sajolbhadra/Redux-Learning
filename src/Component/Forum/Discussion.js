import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Answer from "./Answer";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { format } from "date-fns";
import auth from "../../firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import userPhoto from '../../assets/icon/user1.jpg';

const Discussion = ({ discussion }) => {
  const { name, picture, question } = discussion;
  const [answers, setAnswers] = useState([]);
  const [isAnsOpen, setIsAnsOpen] = useState(false); //it will be removed later
  const [isShowAll, setIsShowAll] = useState(false);
  const [isAddAnsOpen, setIsAddAnsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputAnswer = useRef(null);
  const date = new Date();
  const formattedDate = format(date, "PP");
  const [user] = useAuthState(auth);

  let noOfAns;
  answers ? (noOfAns = answers.length) : (noOfAns = 0);

  useEffect(() => {
    async function Data() {
      const fetchData = await fetch(`http://localhost:5000/forumsAnswer/${discussion._id}`);
      const res = await fetchData.json();
      setAnswers(res);
      setIsLoading(!isLoading);
    }
    Data();
  }, [discussion._id, isLoading]);

  const handlePostAnswer = () => {
    const answer = inputAnswer.current.value;

    const answers = {
      ansID: discussion._id,
      name: user.displayName,
      picture: user.photoURL,
      date: formattedDate,
      ans: answer,
    };

    axios
      .post("http://localhost:5000/forumsAnswer", answers)
      .then((response) => {
        if (response) {
          toast("Post Created!");
          inputAnswer.current.value = "";
        }
      });

    // setIsAddAnsOpen(!isAddAnsOpen);
  };

  return (
    <div className="relative my-12 mx-4 outline outline-offset-2 outline-1 outline-[#B3C5EF] rounded overViewStyle">
      <div
        className="grid grid-flow-row-dense grid-cols-10"
        style={{ boxShadow: isShowAll ? "2px 2px 9px 0.1px #B3C5EF" : "" }}
      >
        <div className="col-span-10 lg:col-span-2 pt-9 pl-4 md:border-r-[0.2px] border-b-[0.2px] borderStyle">
          <img
            className="w-[70px] outline outline-offset-0 outline-1 outline-[#B3C5EF] rounded-full absolute top-[-35px]"
            src={picture? picture: userPhoto}
            alt=""
            style={{ boxShadow: isShowAll ? "2px 2px 9px 0.1px #B3C5EF" : "" }}
          />
          <h2>{name}</h2>
          <p className="text-sm mb-2">{discussion.date}</p>
        </div>
        <div className="col-span-10 lg:col-span-8 p-4 pb-0 border-b-[0.2px] borderStyle">
          {question}
          <p className="mt-4 mb-2 text-right">{noOfAns} answer(s)</p>
        </div>
      </div>

      {/* post answer */}
      <div 
      class="flex justify-between items-center px-2 py-4"
      style={{ boxShadow: isShowAll ? "2px 2px 9px 0.1px #B3C5EF" : "" }}
      >
        <textarea
          ref={inputAnswer}
          class="textarea textarea-bordered h-[10px] w-full"
          placeholder="Answer This Question"
        ></textarea>
        <button
          onClick={handlePostAnswer}
          class="btn btn-outline w-[90px] ml-2"
        >
          post
        </button>
      </div>

      {/* answers */}
      <div >
        {noOfAns ?
          !isShowAll ?
            answers?.slice(-1).map((answer, index) => (
              <Answer key={index} answer={answer}></Answer>
            ))
            :
            answers?.slice(0).reverse().map((answer, index) => (
              <Answer key={index} answer={answer}></Answer>
            ))
          //  answers?.map((answer, index) => (
          //   <Answer key={index} answer={answer}></Answer>
          // ))
          : ""}
      </div>


      {/* show all button button */}
      <div className="flex justify-between">
        <button
          className="mx-4 my-1 underline"
          style={{ display: noOfAns > 1 ? "inline" : "none" }}
          onClick={() => {
            setIsShowAll(!isShowAll);
          }}
        >
          {isShowAll ? "See Less" : "See All"}
        </button>
        <p
          className="mx-4 my-1"
          style={{ display: noOfAns < 2 ? "inline" : "none" }}
        >
          {noOfAns === 0 ? 'No Answer' : 'No more'}
        </p>

      </div>

    </div>
  );
};

export default Discussion;
