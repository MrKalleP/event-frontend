import { useState, useEffect } from 'react';
import { FetchAllProjects } from '../utils/ApiStore';
import { Project } from '../utils/Interface';


const useProjects = () => {
    const [fetchedProjectsData, setfetchedProjectsData] = useState<Project[]>([]);

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

export default useProjects