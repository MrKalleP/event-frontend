
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

import { ProjectBarChartsProps } from "../../utils/Interface";


const ProjectBarCharts: React.FC<ProjectBarChartsProps> = () => {

    const dummiedata = ["sda"]

    return (

        <ResponsiveContainer width="100%" height={350} className={"cardProject"} >
            <BarChart
                data={dummiedata}
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



