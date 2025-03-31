
const base_url = "http://localhost:3000";

const fetchData = async (endpoint: string) => {
    try {
        const response = await fetch(`${base_url}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (err) {
        console.log(err, "did not find all the logs");
        return null;
    }
};

// Fetch all logs
export const FetchAllLogs = async () => fetchData("logs");

// Fetch logs by type alla errors tex
export const FetchLogsByType = async (type: string) => fetchData(`logs/type/${type}`);

// Fetch logs by project får det valda projectet
// export const FetchLogsByProjectId = async (projectId: string, currentPage: number, pageSize: number ) => fetchData(`logs/${projectId}`);

// Fetch all projects får alla project det skiljer sig eftersom loggs bara en array av ["1","2"] istället för vanliga project eftersom den görs om i db
export const FetchAllProjects = async () => fetchData("projects");

// Fetch logs filtered by project and type så tex alla på ståldirekts errors
export const FetchLogsByProjectAndType = async (projectId: string, type: string) =>
    fetchData(`logs/${projectId}/type/${type}`);


export const FetchOneUser = async (userFirstName: string, userPassword: string) => {

    try {
        const response = await fetch(`${base_url}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userFirstName, userPassword }),
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.log(error, "Login failed");
        return null;
    }
};


export const FetchLogsByProjectId = async (projectId: string, currentPage: number, pageSize: number ) => {
    try {
        const response = await fetch(`${base_url}/logs/${projectId}?page=${currentPage}&pageSize=${pageSize}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.log(error, "FetchLogsByProjectId failed to get");
        return null;
    }
}


// Fetch project by projects id och får det valda projectet
//export const FetchProjectById = async (projectId: string) => fetchData(`projects/${projectId}`);
export const FetchProjectById = async (projectId: string) => fetchData(`projects/${projectId}`);



export const fetchOneUserForProject = async (userId: string) => fetchData(`users/${userId}`);

export const FetchAllLogsForThisUser = async (userId: string, projectIds: string) => fetchData(`logs/${projectIds}/${userId}`);

export const FetchAllLogsByTypeForOneUser = async (projectId: string, type: string) => fetchData(`logs/${projectId}/${type}`);


export const fetchAllLogsForProjects = async (projectIds: string[]) => {
    try {
        const response = await fetch(`${base_url}/logs/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ projectIds }),
        })
        return await response.json();
    } catch (error) {
        console.log(error, "fetchAllLogsForProjects failed to get");
        return null;
    }
};

// http://localhost:3000/logs to get all logs  fungerar
// http://localhost:3000/logs/type/error eller info osv beroende på typ info, warning, error, crashed  fungerar 
// http://localhost:3000/logs/project/1 eller 2 osv berode på id tar ut alla project tillhörande det id som projectet tillhör fungerar
// http://localhost:3000/projects får alla project  fungerar
// http://localhost:3000/logs/project/2/type/error fungerar 
// http://localhost:3000/projects/1 får ut det projectet du har valt i det här fallet id 1 fungerar