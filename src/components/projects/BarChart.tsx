import { groupedDataByProject } from "./GroupedDataByProject"

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