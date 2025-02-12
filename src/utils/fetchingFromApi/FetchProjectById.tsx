import { FetchProjectById } from "../ApiStore";

export const ProjectById = async (projectId: string) => {
    if (!projectId) return null;

    try {
        const projectById = await FetchProjectById(projectId);
        console.log(projectById);

        return projectById;
    } catch {
        console.log("Error fetching project by id");
        return null;
    }
};