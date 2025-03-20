
import { fetchOneUserForProject } from "../ApiStore";

export const ProjectsForUserId = async (userId: string) => {
    if (!userId) return null;

    try {
        const projectByUserID = await fetchOneUserForProject(userId);
        return projectByUserID;
    } catch {
        console.log("Error fetching project by id");
        return null;
    }
};


