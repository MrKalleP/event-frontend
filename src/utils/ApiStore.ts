
const base_url = "http://localhost:3000";

const fetchData = async (endpoint: string) => {
    try {
        const response = await fetch(`${base_url}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching data from ${endpoint}:`, error);
        throw error;
    }
};

export const FetchAllLogs = async () => {
    return fetchData("logs");
};

export const FetchLogsByType = async (type: string) => {
    return fetchData(`logs/type/${type}`);
};

export const FetchLogsByProject = async (projectId: string) => {
    return fetchData(`logs/project/${projectId}`);
};

export const FetchAllProjects = async () => {
    return fetchData("projects");
};

export const FetchAllProjectsFilterlogs = async (projectId: string, type: string) => {
    return fetchData(`logs/project/${projectId}/type/${type}`);
}

// http://localhost:3000/logs to get all logs
// http://localhost:3000/logs/type/error eller info osv beroende på typ info, warning, error, crashed
// http://localhost:3000/logs/project/1 eller 2 osv berode på id tar ut alla project tillhörande det id som projectet tillhör
// http://localhost:3000/projects får alla project 
// http://localhost:3000/logs/project/2/type/error