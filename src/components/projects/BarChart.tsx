import { useEffect, useState } from "react";
import { FetchAllProjectsFilterlogs } from "../../utils/ApiStore";
import { groupedDataByProject, } from "./GroupedDataByProject"

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




const ProjectBarCharts: React.FC<ProjectBarChartsProps> = ({ projectId }) => {
    const [chartData, setChartData] = useState<barChartProps[]>([]);

    const fetchLogs = async () => {
        const type = "error";

        try {
            const logs = await FetchAllProjectsFilterlogs(projectId, type);
            const processedData = groupedDataByProject(logs);
            setChartData(processedData);
        } catch (error) {
            console.error('Error fetching logs:', error);
        }
    };

    useEffect(() => {
        fetchLogs();
    }, [projectId]);

    return (

        <ResponsiveContainer width="100%" height={350} className={"cardProject"} >
            <BarChart
                data={chartData}
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



