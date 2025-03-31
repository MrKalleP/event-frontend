import { useState, useEffect } from 'react';
import { FetchLogsByProjectId } from '../utils/ApiStore';
import { Log } from '../utils/Interface';

export const useFetchAllLogsForProjects = (projectId: string): { data: Log[] } => {
    const [fetchAllLogsForProjects, setFetchAllLogsForProjects] = useState<Log[]>([]);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const allLogs = await FetchLogsByProjectId(projectId);
                setFetchAllLogsForProjects(allLogs);
            } catch (error) {
                console.log("Did not find all of the logs", error);
            }
        };

        if (projectId) {
            fetchLogs();
        }
    }, [projectId]);

    return { data: fetchAllLogsForProjects };
};