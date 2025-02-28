import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Log, preProcessDataType } from "../../utils/Interface";

const filterDataByRange = (data: Log[], range: string, projectId: string) => {
    const now = new Date();
    let startDate;

    switch (range) {
        case "today":
            startDate = new Date();
            startDate.setHours(0, 0, 0, 0);
            break;
        case "week":
            startDate = new Date();
            startDate.setDate(now.getDate() - 7);
            break;
        case "month":
            startDate = new Date();
            startDate.setMonth(now.getMonth() - 1);
            break;
        case "year":
            startDate = new Date();
            startDate.setFullYear(now.getFullYear() - 1);
            break;
        default:
            return data.filter(log => log.projectId === projectId);
    }

    // Filtrera både på datum och projectId
    return data.filter(log => new Date(log.date) >= startDate && log.projectId === projectId);
};

const aggregateData = (data: Log[], range: string) => {
    let aggregatedData: {
        [key: string]: { date: string, info: number, warning: number, error: number, crashed: number }
    } = {};

    data.forEach((entry) => {
        const date = new Date(entry.date);
        let key = "";

        if (range === "today" || range === "week") {
            key = date.toISOString().split("T")[0];
        } else if (range === "month") {
            key = `${date.getFullYear()}-${date.getMonth() + 1}`;
        } else if (range === "year") {
            key = `${date.getFullYear()}`;
        }

        if (!key) {
            console.error("Undefined key for date:", date);
            return;
        }

        // Skapa ny samling om det inte redan finns
        if (!aggregatedData[key]) {
            aggregatedData[key] = { date: key, info: 0, warning: 0, error: 0, crashed: 0 };
        }

        // Räknar varje typ av logg
        if (entry.type === "info") aggregatedData[key].info += 1;
        else if (entry.type === "warning") aggregatedData[key].warning += 1;
        else if (entry.type === "error") aggregatedData[key].error += 1;
        else if (entry.type === "crashed") aggregatedData[key].crashed += 1;
    });

    return Object.values(aggregatedData);
};

export default function ProjectLineChart({ allLogs, projectId }: { allLogs: Log[], projectId: string }) {
    const [timeRange, setTimeRange] = useState("today");
    const [filteredData, setFilteredData] = useState<preProcessDataType[]>([]);

    useEffect(() => {
        const filtered = filterDataByRange(allLogs, timeRange, projectId);
        const aggregated = aggregateData(filtered, timeRange);

        setFilteredData(aggregated);
    }, [timeRange, allLogs, projectId]);

    return (
        <main className="containerProjectLineChart" style={{ backgroundColor: "white", height: "100%", borderRadius: ".5rem", padding: "2rem" }}>
            <h2 className="ProjectLineChartH2">Projektets Loggar</h2>
            <ResponsiveContainer width="100%" height={500} style={{ padding: "2rem" }}>
                <LineChart data={filteredData}>
                    <XAxis dataKey="date" tickFormatter={(date) => {
                        if (timeRange === "month") {
                            return date.replace("-", "/");
                        }
                        return date;
                    }} />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="info" stroke="var(--Info-color-)" strokeWidth={1.6} name="Info" activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="warning" stroke="var(--Warning-color-)" strokeWidth={1.6} name="Warning" />
                    <Line type="monotone" dataKey="error" stroke="var(--errors-color-)" strokeWidth={1.6} name="Error" />
                    <Line type="monotone" dataKey="crashed" stroke="var(--Crashed-color-)" strokeWidth={1.6} name="Crashed" />
                </LineChart>
            </ResponsiveContainer>
            <select className="selectenForLineCart" value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                <option value="today">Today</option>
                <option value="week">A week back</option>
                <option value="month">Last month</option>
                <option value="year">The whole year</option>
            </select>
        </main>
    );
}