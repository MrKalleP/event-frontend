
import { useState, useEffect } from 'react';
import { fetchAllLogsForProjects, } from '../utils/ApiStore';
import { useAuth } from './useAuthHook';


export const useFetchAllLogsForProjects = () => {
    const [fetchAllLogs, setfetchAllLogs] = useState([]);
    console.log(fetchAllLogs);

    const auth = useAuth();
    const { user } = auth;
    console.log(user);

    useEffect(() => {
        const fetchLogs = async () => {

            if (!user?.userId) {
                console.log("Missing projectId or userId, skipping fetch");
                return;
            }

            try {
                const allLogs = await fetchAllLogsForProjects(user.projectId as string[])
                console.log(allLogs, "hej");

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