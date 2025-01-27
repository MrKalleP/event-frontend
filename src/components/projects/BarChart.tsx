

import { useAllLogs } from "../../hooks/useFetchAllLogs";
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


const ProjectBarCharts: React.FC<projectDataProps> = () => {

    const { data: allLogs } = useAllLogs()
    const dataBarChart = groupedDataByProject(allLogs)

    return (

        <ResponsiveContainer width="100%" height={350} className={"cardProject"} >
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
                <Bar dataKey="errors" fill="var(--errors-color-)" />
            </BarChart>
        </ResponsiveContainer>

    )
}

export default ProjectBarCharts;


