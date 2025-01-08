import test_data from "../../utils/testdata.json"

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


const groupedData = Array.from({ length: 24 }, (_, hourIndex) => {
    const formattedHour = `${hourIndex.toString().padStart(2, '0')}:00`;
    return {
        hour: formattedHour,
        errors: 0,
    };
});
console.log(groupedData);

test_data.forEach((log) => {
    const hour = new Date(log.date).getHours();
    groupedData[hour].errors += 1;
});

const ProjectBarChart = () => (
    <ResponsiveContainer width="100%" height={250}>
        <BarChart
            data={groupedData}
            style={{ padding: ".4rem" }}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="hour"
                label={{
                    value: "Hour",
                    position: "insideBottom",
                    offset: -5,
                }}
            />
            <YAxis
                label={{
                    value: "Errors",
                    angle: -90,
                    position: "insideLeft",
                    offset: 10
                }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="errors" fill="#de7724" />
        </BarChart>
    </ResponsiveContainer>
);

export default ProjectBarChart;