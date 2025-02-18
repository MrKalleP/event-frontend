import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FetchAllProjects } from '../ApiStore';


interface ProjectNameProps {
    projectId: string;
}

const ProjectName = ({ projectId }: ProjectNameProps) => {
    const [projectName, setProjectName] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            if (!projectId) return;
            try {
                const projects = await FetchAllProjects();
                if (Array.isArray(projects)) {
                    const project = projects.find(proj => proj.id === projectId);
                    if (project && project.name) {
                        setProjectName(project.name);
                    } else {
                        console.log("project name not found");
                    }
                }
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        };
        fetchProject();
    }, [projectId]);

    return (
        <Link to={`project/${projectId}`}>
            {projectName}
        </Link>
    );
};

export default ProjectName;