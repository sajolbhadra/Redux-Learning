import React, { useContext } from "react";
import { AllContext } from "../../context/AllProvider";

const Result = () => {
  const { totalAns } = useContext(AllContext);
  console.log(totalAns);
  return (
    <div className="min-h-screen">
      <p className="text-3xl font-bold text-center mt-20">
        Result : {totalAns?.length}
      </p>

      {totalAns.map((a) => (
        <p>
          {a.id}. {a.selectedAns}
        </p>
      ))}
    </div>
  );
};

export default Result;
