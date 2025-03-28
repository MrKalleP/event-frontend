import { useState, useEffect } from 'react';
import { FetchAllLogsForThisUser } from '../utils/ApiStore';
import { useAuth } from './useAuthHook';


export const useAllLogs = () => {
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
                const allLogs = await FetchAllLogsForThisUser(user.userId, user.projectIds as string);
                console.log(allLogs);

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



/*

this Code is for one admin if you want all the logs for every project

import { FetchAllLogs } from '../utils/ApiStore';

export const useAllLogs = () => {
    const [fetchAllLogs, setfetchAllLogs] = useState([]);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const allLogs = await FetchAllLogs();
                setfetchAllLogs(allLogs);
            } catch {
                console.log("did not find all of the logs");
            }
        };
        fetchLogs();
    }, []);


    return { data: fetchAllLogs };
};

*/
