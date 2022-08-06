import React, { createContext, useState } from "react";

export const AllContext = createContext();
const AllProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);
  const [selected, setSelected] = useState({});
  const [totalAns, setTotalAns] = useState([]);

  const value = {
    totalAns,
    setTotalAns,
    questions,
    setQuestions,
    question, setQuestion,
    selected, setSelected
  };
  return <AllContext.Provider value={value}>{children}</AllContext.Provider>;
};

export default AllProvider;
