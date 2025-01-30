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

// Fetch all logs
export const FetchAllLogs = async () => fetchData("logs");

// Fetch logs by type
export const FetchLogsByType = async (type: string) => fetchData(`logs/type/${type}`);

// Fetch logs by project
export const FetchLogsByProject = async (projectId: string) => fetchData(`logs/project/${projectId}`);

// Fetch all projects
export const FetchAllProjects = async () => fetchData("projects");

// Fetch logs filtered by project and type
export const FetchLogsByProjectAndType = async (projectId: string, type: string) =>
    fetchData(`logs/project/${projectId}/type/${type}`);

// Fetch logs from the last X days fungerar ej
export const FetchLogsLastDays = async (date: string) => fetchData(`logs/last/${date}`);

// Fetch logs of a specific type from the last X days fungerar ej
export const FetchLogsByTypeLastDays = async (type: string, date: string) =>
    fetchData(`logs/type/${type}/last/${date}`);

// Fetch logs by multiple types (comma-separated)
export const FetchLogsByMultipleTypes = async (types: string) => fetchData(`logs/types?types=${types}`);

// Fetch log count per project
export const FetchLogCountPerProject = async () => fetchData("logs/count");

// http://localhost:3000/logs to get all logs  fungerar
// http://localhost:3000/logs/type/error eller info osv beroende på typ info, warning, error, crashed  fungerar 
// http://localhost:3000/logs/project/1 eller 2 osv berode på id tar ut alla project tillhörande det id som projectet tillhör fungerar
// http://localhost:3000/projects får alla project  fungerar
// http://localhost:3000/logs/project/2/type/error fungerar 
// http://localhost:3000/logs/types?types=error,warning här får du tex alla error och warning fungerar
// http://localhost:3000/logs/count fungerar 
