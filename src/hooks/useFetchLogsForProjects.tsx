import { useState, useEffect } from "react";
import { barChartProps } from "../utils/Interface";
import { FetchAllProjectsFilterlogs } from "../utils/ApiStore";
import { groupedDataByProject } from "../components/projects/GroupedDataByProject";

export const useFetchLogsForProjects = (projectId: string, type: string) => {
    const [getTypesFromProjects, setgetTypesFromProjects] = useState<barChartProps[]>([]);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const logs = await FetchAllProjectsFilterlogs(projectId, type);
                const processedData = groupedDataByProject(logs);
                setgetTypesFromProjects(processedData);
            } catch (error) {
                console.error("Error fetching logs:", error);
            }
        };

        fetchLogs();
    }, [projectId, type]);

    return { getTypesFromProjects };
};