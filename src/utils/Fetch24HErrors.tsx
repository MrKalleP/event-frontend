import { DataProject24HErrors } from "../components/projects/DataProject24HErrors";
import { FetchLogsByProjectAndType } from "./ApiStore";

export const fetch24HErrors = async (projectId: string) => {
    if (!projectId) return [];

    try {
        const logs = await FetchLogsByProjectAndType(projectId, "error");
        return DataProject24HErrors(logs);
    } catch (error) {
        console.error("Error fetching 24H errors:", error);
        return [];
    }
};