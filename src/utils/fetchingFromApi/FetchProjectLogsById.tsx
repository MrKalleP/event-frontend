import { FetchLogsByProjectId } from "../ApiStore";

export const ProjectLogsById = async (projectId: string) => {
    if (!projectId) return null;

    try {
        const projectLogsById = await FetchLogsByProjectId(projectId);
        return projectLogsById;
    } catch {
        console.log("Error fetching project by id");
        return null;
    }
};