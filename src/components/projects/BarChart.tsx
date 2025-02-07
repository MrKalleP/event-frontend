
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

import { barChartProps, ProjectBarChartsProps } from "../../utils/Interface";
import { useEffect, useState } from "react";
import { fetch24HErrors } from "../../utils/fetchingFromApi/Fetch24HErrors";

const ProjectBarCharts: React.FC<ProjectBarChartsProps> = ({ projectId }) => {
    const [errors24H, setError24H] = useState<barChartProps[]>([])

    useEffect(() => {
        const fetchErrorData = async () => {
            const errors = await fetch24HErrors(projectId)
            setError24H(errors)
        }
        fetchErrorData()
    }, [projectId])

    return (

        <ResponsiveContainer width="100%" height={350} className={"cardProject"} >
            <BarChart
                data={errors24H}
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



