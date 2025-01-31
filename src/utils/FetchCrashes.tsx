import { FetchLogsByProjectAndType } from "./ApiStore";

export const fetchCrashes = async (projectId: string) => {
    if (!projectId) return [];

    try {
        const logs = await FetchLogsByProjectAndType(projectId, "crash");
        return logs;
    } catch (error) {
        console.error("Error fetching crashes:", error);
        return [];
    }
};