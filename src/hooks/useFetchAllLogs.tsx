import { useState, useEffect } from 'react';
import { FetchAllLogs } from '../utils/ApiStore';

export const useAllLogs = () => {
    const [fetchAllLogs, setfetchAllLogs] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const allProjects = await FetchAllLogs();
                setfetchAllLogs(allProjects);
            } catch (error) {
                console.log("did not find all of the logs");
            }
        };
        fetchProjects();
    }, []);


    return { data: fetchAllLogs };
};



