

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const now = new Date();
const oneDayAgoAgain = new Date(now.getTime() - 24 * 60 * 60 * 1000);

const groupedDataByProject = (data: string) => {

    const groupedData = Array.from({ length: 24 }, (_, hourIndex) => {
        const currentHour = new Date(oneDayAgoAgain.getTime() + hourIndex * 60 * 60 * 1000);

        const formattedHour = `${currentHour.getHours().toString().padStart(2, '0')}:00`;
        return {
            hour: formattedHour,
            errors: 0,
        };
    });

    data.forEach((log) => {
        const dateObj = new Date(log.date);
        const hour = dateObj.getHours();


        if (log.type === "error" && dateObj >= oneDayAgoAgain && dateObj <= now) {
            groupedData[hour].errors += 1;
        }
    });

    return groupedData;
};

const ProjectBarCharts = ({ data }) => {
    const dataBarChart = groupedDataByProject(data)
    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart
                data={dataBarChart}
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
                        offset: 10,
                    }}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="errors" fill="#de7724" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default ProjectBarCharts;