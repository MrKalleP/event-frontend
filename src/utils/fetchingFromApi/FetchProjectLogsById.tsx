import { FetchLogsByProjectId } from "../ApiStore";

export const ProjectLogsById = async (projectId: string, currentPage: number, pageSize: number) => {
    if (!projectId) return null;

    try {
        const projectLogsById = await FetchLogsByProjectId(projectId, currentPage, pageSize);

        return projectLogsById;
    } catch {
        console.log("Error fetching project by id");
        return null;
    }
};