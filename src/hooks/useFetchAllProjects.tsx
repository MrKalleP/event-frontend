import { useState, useEffect } from 'react';
import { FetchAllProjects } from '../utils/ApiStore';


export const useProjects = () => {
    const [fetchedProjectsData, setfetchedProjectsData] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const allProjects = await FetchAllProjects();
                setfetchedProjectsData(allProjects);
            } catch {
                console.log("did not find all projects");
            }
        };
        fetchProjects();
    }, []);


    return { dataFromFetchProjects: fetchedProjectsData };
};

