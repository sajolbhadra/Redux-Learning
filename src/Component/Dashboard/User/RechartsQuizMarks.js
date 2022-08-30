import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import auth from "../../../firebase/firebase.init";

const RechartsQuizMarks = ({ data }) => {
  const [q1, setq1] = useState([]);

  // console.log(data);

  console.log(q1);
  // useEffect(() => {
  //   const q = data.filter((a, index) => console.log(a));
  //   setq1(q);
  // }, [data]);

  useEffect(() => {
    const q = data.map((a, index) => setq1(a));
  },[data])

  // const d = [
  //   {
  //     quiz: q1?.quizTitle,
  //     marks: q1?.result.toFixed(2),
  //   },
    // {
    //   month: "Lesson 2",
    //   investment: 200000,
    //   marks: 423,
    //   revenue: 24500,
    // },
    // {
    //   month: "Lesson 3",
    //   investment: 500000,
    //   marks: 726,
    //   revenue: 67010,
    // },
    // {
    //   month: "Lesson 5",
    //   investment: 500000,
    //   marks: 529,
    //   revenue: 40405,
    // },
    // {
    //   month: "Lesson 6",
    //   investment: 600000,
    //   marks: 601,
    //   revenue: 50900,
    // },
    // {
    //   month: "Lesson 7",
    //   investment: 700000,
    //   marks: 670,
    //   revenue: 61000,
    // },
  // ];
  return (
    <BarChart
      width={1100}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="quizTitle" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        type="monotone"
        dataKey="result"
        fill="#8884d8"
        barSize={15}
        // activeDot={{ r: 8 }}
      />
    </BarChart>
  );
};

export default RechartsQuizMarks;
