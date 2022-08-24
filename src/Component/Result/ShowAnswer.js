import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AllContext } from "../../context/AllProvider";

const ShowAnswer = () => {
  const { selectedAns } = useContext(AllContext);

  return (
    <div className="rounded">
      <h2 className="text-3xl font-bold text-center ">
        Answer
      </h2>

      {selectedAns.map((q) => (
        <div className="card w-[90%] mx-auto shadow-lg p-4">
          <p className="font-bold text-xl">
            {q.id}. {q.question}
          </p>

          {q?.options?.map((option) =>
            option === q.ans ? (
              <p className="border bg-green-400 text-white my-2 ml-4 p-2">{option}</p>
            ) : option !== q.selectedAns ? (
              <p className="border my-2 ml-4 p-2">{option}</p>
            ) : (
              <p className="border bg-red-500 my-2 ml-4 p-2">{option}</p>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowAnswer;
