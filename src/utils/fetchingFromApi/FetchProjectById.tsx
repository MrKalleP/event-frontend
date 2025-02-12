import { FetchProjectById } from "../ApiStore";

export const ProjectById = async (projectId: string) => {
    if (!projectId) return null;

    try {
        const projectById = await FetchProjectById(projectId);
        return projectById;
    } catch {
        console.log("Error fetching project by id");
        return null;
    }
};