
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const rawData = [
    { timestamp: '2025-01-08T00:15:00', message: 'Error 1' },
    { timestamp: '2025-01-08T00:45:00', message: 'Error 2' },
    { timestamp: '2025-01-08T01:10:00', message: 'Error 3' },
    { timestamp: '2025-01-08T02:05:00', message: 'Error 4' },
];

const groupedData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, '0')}:00`,
    errors: 0,
}));

rawData.forEach((log) => {
    const hour = new Date(log.timestamp).getHours();
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