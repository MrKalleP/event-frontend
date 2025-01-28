import { useEffect, useState } from "react";
import { barChartProps } from "./Interface";
import { FetchAllProjectsFilterlogs } from "./ApiStore";
import { groupedDataByProject } from "../components/projects/GroupedDataByProject";

export const FetchLogsByTypesAndProject = (projectId: string, type: string) => {
    const [chartData, setChartData] = useState<barChartProps[]>([]);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const logs = await FetchAllProjectsFilterlogs(projectId, type);
                const processedData = groupedDataByProject(logs);
                setChartData(processedData);
            } catch (error) {
                console.error("Error fetching logs:", error);
            } finally {
            }
        };
        fetchLogs();
    }, [projectId, type]);

    return { chartData };
};