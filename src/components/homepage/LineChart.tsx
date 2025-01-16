import { PreProcessData } from "./preProcessData";


import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";



function LineChartExample({ data }) {
    const processedData = PreProcessData(data);
    return (

        <ResponsiveContainer width="100%" height={400} >
            <LineChart
                data={processedData}
                margin={{
                    top: 6,
                    right: 35,
                    left: 15,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fill: "#2A2A2A", fontSize: 10 }} />
                <YAxis tick={{ fill: "#2A2A2A", fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="info" stroke="#3A4DCB" name="Info" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="warning" stroke="#8D8D10" name="Warning" />
                <Line type="monotone" dataKey="error" stroke="#C52E2E" name="Error" />
                <Line type="monotone" dataKey="crashed" stroke="#D04CC1" name="crashed" />
            </LineChart>
        </ResponsiveContainer>

    );
}

export default LineChartExample;