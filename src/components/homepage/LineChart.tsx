import { ProcessedDataType } from "../../utils/Interface";
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



function LineChartExample({ data }: { data: ProcessedDataType }) {

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
                <Line type="monotone" dataKey="info" stroke="var(--Info-color-)" strokeWidth={1.6} name="Info" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="warning" stroke="var(--Warning-color-)" strokeWidth={1.6} name="Warning" />
                <Line type="monotone" dataKey="error" stroke="var(--errors-color-)" strokeWidth={1.6} name="Error" />
                <Line type="monotone" dataKey="crashed" stroke="var(--Crashed-color-)" strokeWidth={1.6} name="crashed" />
            </LineChart>
        </ResponsiveContainer>

    );
}

export default LineChartExample;