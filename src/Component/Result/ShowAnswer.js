import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import auth from "../../firebase/firebase.init";

const ShowAnswer = ({quiz}) => {
  // const { selectedAns } = useSelector((state) => state.selectedAns);
  // console.log(selectedAns);
  const [selectedAns, setSelectedAns]=useState([])
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`https://redux-learning-server.herokuapp.com/userAnswer/${user?.email}`)
            .then(res => res.json())
            .then(data => {
              const q = data.filter(a => a.quizTitle === quiz);
              setSelectedAns(q[0].selectedAns);
              console.log(q[0].selectedAns);
            })
  }, [quiz, user?.email]);

  return (
    <div className="rounded">
      <h2 className="text-3xl font-bold text-center ">Answer</h2>

      {selectedAns.map((q) =>
        q.map((q1) => (
          <div className="card w-[90%] mx-auto shadow-lg p-4">
            <p className="font-bold text-xl">
              {q1.id}. {q1.question}
            </p>

            {q1?.options?.map((option) =>
              option === q1.ans ? (
                <p className="border bg-green-400 text-white my-2 ml-4 p-2">
                  {option}
                </p>
              ) : option !== q1.selectedAns ? (
                <p className="border my-2 ml-4 p-2">{option}</p>
              ) : (
                <p className="border bg-red-500 my-2 ml-4 p-2">{option}</p>
              )
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ShowAnswer;
