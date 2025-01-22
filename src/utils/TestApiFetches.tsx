import { useEffect } from "react";
import {
    FetchAllLogs,
    FetchLogsByType,
    FetchLogsByProject,
    FetchAllProjects,
} from "./ApiStore";

const TestApiFetches = () => {
    useEffect(() => {
        const testApiFunctions = async () => {
            try {
                console.log("Fetching all logs...");
                const allLogs = await FetchAllLogs();
                console.log("All Logs:", allLogs);

                console.log("Fetching logs by type: 'error'...");
                const errorLogs = await FetchLogsByType("error");
                console.log("Error Logs:", errorLogs);
                const errorWarning = await FetchLogsByType("warning");
                console.log("Error Logs:", errorWarning);
                const errorInfo = await FetchLogsByType("info");
                console.log("Error Logs:", errorInfo);
                const errorCrashed = await FetchLogsByType("crashed");
                console.log("Error Logs:", errorCrashed);

                console.log("Fetching logs by project ID: 1...");
                const projectLogsOne = await FetchLogsByProject(1);
                const projectLogsTwo = await FetchLogsByProject(2);
                const projectLogsThree = await FetchLogsByProject(3);
                console.log("Project Logs for ID 1:", projectLogsOne);
                console.log("Project Logs for ID 1:", projectLogsTwo);
                console.log("Project Logs for ID 1:", projectLogsThree);

                console.log("Fetching all projects...");
                const allProjects = await FetchAllProjects();
                console.log("All Projects:", allProjects);

            } catch (error) {
                console.error("Error during API tests:", error);
            }
        };

        testApiFunctions();
    }, []);

    return (
        <div>

        </div>
    );
};

export default TestApiFetches;