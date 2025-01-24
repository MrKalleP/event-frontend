import { useState, useEffect } from 'react';
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



