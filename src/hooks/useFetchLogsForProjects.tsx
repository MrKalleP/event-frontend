import { useState, useEffect } from "react";
import { barChartProps } from "../utils/Interface";
import { FetchLogsByProjectAndType } from "../utils/ApiStore";
import { DataProject24HErrors } from "../components/projects/DataProject24HErrors";

export const useFetchLogsForProjects = (projectId: string, type: string) => {
    const [getTypesFromProjects, setGetTypesFromProjects] = useState<barChartProps[]>([]);

    useEffect(() => {
        if (!projectId || !type) return;
        const fetchLogs = async () => {
            try {
                const logs = await FetchLogsByProjectAndType(projectId, type);
                const processedData = DataProject24HErrors(logs);
                setGetTypesFromProjects(processedData);
            } catch (error) {
                console.error("Error fetching logs:", error);
            }
        };

        fetchLogs();
    }, [projectId, type]);

    return { getTypesFromProjects };
};