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

        <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: "white", borderRadius: ".5rem", padding: "1rem" }}>
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
                <Line type="monotone" dataKey="info" stroke="var(--Info-color-)" name="Info" activeDot={{ r: 8 }} strokeWidth={2} />
                <Line type="monotone" dataKey="warning" stroke="var(--Warning-color-)" name="Warning" strokeWidth={2} />
                <Line type="monotone" dataKey="error" stroke="var(--errors-color-)" name="Error" strokeWidth={2} />
                <Line type="monotone" dataKey="crashed" stroke="var(--Crashed-color-)" name="crashed" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>

    );
}

export default LineChartExample;