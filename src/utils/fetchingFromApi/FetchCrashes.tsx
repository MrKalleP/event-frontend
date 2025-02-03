import { FetchLogsByProjectAndType } from "../ApiStore";

export const fetchCrashes = async (projectId: string, type: string) => {
    if (!projectId || !type) {
        console.log("Missing projectId or type");
        return [];
    }

    try {
        console.log(`Fetching logs for project: ${projectId}, type: ${type}`);

        const logs = await FetchLogsByProjectAndType(projectId, "crashed");

        console.log("Fetched logs:", logs);

    } catch {
        console.log("Error fetching crashes:");
        return [];
    }
};