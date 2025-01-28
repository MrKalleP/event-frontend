import { useState, useEffect } from 'react';
import { FetchLogsByProject } from '../utils/ApiStore';

export const useFetchLogsForProjects = ({ projectId }: { projectId: string }) => {
    const [fetchedProjectsAndLogsData, setfetchedProjectsAndLogsData] = useState([]);
    useEffect(() => {
        const fetchProjectsLogs = async () => {
            try {
                const allLogsForProjects = await FetchLogsByProject(projectId);
                setfetchedProjectsAndLogsData(allLogsForProjects);

            } catch {
                console.log("did not find all projects for this logs");
            }
        };
        fetchProjectsLogs();
    }, [projectId]);

    return { data: fetchedProjectsAndLogsData };
};