import { useState, useEffect } from 'react';
import { FetchLogsByProjectId } from '../utils/ApiStore';
import { Log } from '../utils/Interface';

export const useFetchAllLogsForProjects = (projectId: string, currentPage: number, pageSize: number): { data: Log[] } => {
    const [fetchAllLogsForProjects, setFetchAllLogsForProjects] = useState<Log[]>([]);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const allLogs = await FetchLogsByProjectId(projectId, currentPage, pageSize);
                setFetchAllLogsForProjects(allLogs);
            } catch (error) {
                console.log("Did not find all of the logs", error);
            }
        };

        if (projectId) {
            fetchLogs();
        }
    }, [currentPage, pageSize, projectId]);

    return { data: fetchAllLogsForProjects };
};