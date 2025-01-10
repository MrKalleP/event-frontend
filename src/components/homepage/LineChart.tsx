import test_data from "../../utils/testdata.json";
import { DataType, ProcessedDataType } from "../../utils/Interface"

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



const preProcessData = (data: DataType[]): ProcessedDataType[] => {
    const groupedData: { [key: string]: ProcessedDataType } = {};
    const today = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(today.getDate() - 7);

    data.forEach(({ date, type }) => {
        const dateObj = new Date(date);
        if (dateObj >= oneWeekAgo && dateObj <= today) {
            const formattedDate = dateObj.toISOString().split('T')[0];
            if (!groupedData[formattedDate]) {
                groupedData[formattedDate] = { date: formattedDate, info: 0, warning: 0, error: 0, crashed: 0 };
            }
            if (type in groupedData[formattedDate]) {
                groupedData[formattedDate][type as keyof ProcessedDataType]++;
            }
        }
    });


    const result = Object.values(groupedData).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return result;
};
function LineChartExample() {
    const processedData = preProcessData(test_data);

    return (
        <ResponsiveContainer width="100%" height={400} style={{ marginTop: "17rem", padding: ".3rem" }}>
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