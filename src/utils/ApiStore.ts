
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
    console.log(fetchData("logs"));

    return fetchData("logs");
};

export const FetchLogsByType = async (type: string) => {
    console.log(fetchData(`logs/type/${type}`));

    return fetchData(`logs/type/${type}`);
};

export const FetchLogsByProject = async (projectId: number) => {
    console.log(fetchData(`logs/project/${projectId}`));

    return fetchData(`logs/project/${projectId}`);
};

export const FetchAllProjects = async () => {
    console.log(fetchData("projects"));

    return fetchData("projects");
};

// http://localhost:3000/logs to get all logs
// http://localhost:3000/logs/type/error eller info osv beroende på typ info, warning, error, crashed
// http://localhost:3000/logs/project/1 eller 2 osv berode på id tar ut alla project tillhörande det id som projectet tillhör
// http://localhost:3000/projects får alla project 