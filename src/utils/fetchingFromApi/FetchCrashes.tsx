import { FetchLogsByProjectAndType } from "../ApiStore";


export const fetchCrashes = async (projectId: string) => {
    if (!projectId) {
        console.log("Missing projectId or type");
        return [];
    }
    try {
        const logs = await FetchLogsByProjectAndType(projectId, "crashed");
        return logs
    } catch {
        console.log("Error fetching crashes:");
        return [];
    }
};