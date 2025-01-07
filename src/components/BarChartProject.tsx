
import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip } from "recharts";



const BarChartProjects: React.FC<{ data: any[] }> = ({ data }) => (
    <BarChart width={600} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
);

export default BarChartProjects;