
import { groupedDataByProject, projectDataProps } from "./GroupedDataByProject"

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


const ProjectBarCharts: React.FC<projectDataProps> = ({ data }) => {
    const dataBarChart = groupedDataByProject(data)

    return (

        <ResponsiveContainer width="100%" height={350} >
            <BarChart
                data={dataBarChart}
                style={{ marginBlock: "1rem" }}
                margin={{ top: 5, right: 10, bottom: 15, left: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="hour"
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