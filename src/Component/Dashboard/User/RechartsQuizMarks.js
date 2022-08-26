import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const RechartsQuizMarks = () => {
    const data = [
        {
            "month": "Lesson 1",
            "investment": 100000,
            "marks": 241,
            "revenue": 10401
        },
        {
            "month": "Lesson 2",
            "investment": 200000,
            "marks": 423,
            "revenue": 24500
        },
        {
            "month": "Lesson 3",
            "investment": 500000,
            "marks": 726,
            "revenue": 67010
        },
        {
            "month": "Lesson 5",
            "investment": 500000,
            "marks": 529,
            "revenue": 40405
        },
        {
            "month": "Lesson 6",
            "investment": 600000,
            "marks": 601,
            "revenue": 50900
        },
        {
            "month": "Lesson 7",
            "investment": 700000,
            "marks": 670,
            "revenue": 61000
        }
    ];
    return (
        <LineChart
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
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="marks" stroke="#82ca9d" activeDot={{ r: 8 }} />


        </LineChart>
    )
}

export default RechartsQuizMarks