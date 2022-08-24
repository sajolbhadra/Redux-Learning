import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { AllContext } from "../../context/AllProvider";

const ShowAnswer = () => {
  const { totalAns, selectedAns } = useContext(AllContext);
  const { isLoading, quizzes, error } = useSelector((state) => state.quizzes);

  // const op = selectedAns.map((a) => a.id);
  // const options = quizzes.map((q) => q.id);
  // const opAns = selectedAns.map((a) => a.selectedAns);
  // const optionsAns = quizzes.map((q) => q.ans);
  // for (let i = 0; i < selectedAns.length; i++) {
  //   const asd = op[i] === options[i];
  //   for (let a = 0; a < selectedAns.length; a++) {
  //     const ans = opAns[i] === optionsAns[i];
  //     console.log(ans);
  //   }
  // }

  return (
    <div className="min-h-screen ">
      <h2 className="text-3xl font-bold text-center text-primary mt-24">
        Answer
      </h2>

      {quizzes.map((q) => (
        <div className="card w-[90%] lg:w-[50%] mx-auto shadow-lg p-4">
          <p className="font-bold text-primary">
            {q.id}. {q.question}
          </p>
       
          {q?.options?.map((option) =>
            option === q.ans ? (
              <p className="border bg-green-400 my-2 ml-4 p-2">{option}</p>
            ) : (
              <p className="border my-2 ml-4 p-2">{option}</p>
            )
          )}
          {/* {
          q.id === selectedAns.map(a=> a.id) 
          && 
          q.ans === selectedAns.map(a=> a.selectedAns) 
          ?( 
              <p className="border bg-green-400 my-2 ml-4 p-2">{q.ans}</p>
            ): (
              <p className="border my-2 ml-4 p-2">{q.ans}</p>
            )
        } */}
        </div>
      ))}
    </div>
  );
};

export default ShowAnswer;
