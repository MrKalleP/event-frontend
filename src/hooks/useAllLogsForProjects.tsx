
import { useState, useEffect } from 'react';
import { fetchAllLogsForProjects, } from '../utils/ApiStore';
import { useAuth } from './useAuthHook';
import { Log } from '../utils/Interface';


export const useFetchAllLogsForProjects = (): { data: Log[] } => {
    const [fetchAllLogs, setfetchAllLogs] = useState([]);

    const auth = useAuth();
    const { user } = auth;

    useEffect(() => {
        const fetchLogs = async () => {

            if (!user?.userId) {
                console.log("Missing projectId or userId, skipping fetch");
                return;
            }

            try {
                const allLogs = await fetchAllLogsForProjects(user.projectId)
                setfetchAllLogs(allLogs);
            } catch {
                console.log("Did not find all of the logs");
            }
        };
        if (user) {
            fetchLogs();
        }
    }, [user]);

    return { data: fetchAllLogs };
};