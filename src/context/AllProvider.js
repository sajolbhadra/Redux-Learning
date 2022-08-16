import React, { createContext, useState } from "react";

export const AllContext = createContext();
const AllProvider = ({ children }) => {
  const [question, setQuestion] = useState([]);
  const [selected, setSelected] = useState({});
  const [totalAns, setTotalAns] = useState([]);

  const [nestedRoute, setNestedRoute] = useState([]);

  const [bg, setBg] = useState(true);
  const [resultInPercentage, setResultInPercentage] = useState(0);

  const value = {
    totalAns,
    setTotalAns,
    question,
    setQuestion,
    resultInPercentage,
    setResultInPercentage,
    selected,
    setSelected,
    bg,
    setBg,
    nestedRoute,
    setNestedRoute,
  };
  return <AllContext.Provider value={value}>{children}</AllContext.Provider>;
};

export default AllProvider;
