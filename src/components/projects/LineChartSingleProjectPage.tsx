import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";
import { Log, preProcessDataType, PutAllDataTogheterMap } from "../../utils/Interface";

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

const putAllDataTogheter = (data: Log[], range: string): Array<PutAllDataTogheterMap[keyof PutAllDataTogheterMap]> => {
    let putAllDataTogheter: PutAllDataTogheterMap = {};

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
        if (!putAllDataTogheter[key]) {
            putAllDataTogheter[key] = { date: key, info: 0, warning: 0, error: 0, crashed: 0, type: "" };
        }

        // Räknar varje typ av logg
        if (entry.type === "info") putAllDataTogheter[key].info += 1;
        else if (entry.type === "warning") putAllDataTogheter[key].warning += 1;
        else if (entry.type === "error") putAllDataTogheter[key].error += 1;
        else if (entry.type === "crashed") putAllDataTogheter[key].crashed += 1;
    });

    return Object.values(putAllDataTogheter);
};

export default function ProjectLineChart({ allLogs, projectId }: { allLogs: Log[], projectId: string }) {
    const [timeRange, setTimeRange] = useState("week");
    const [logType, setLogType] = useState("all");
    const [filteredData, setFilteredData] = useState<preProcessDataType[]>([]);

    useEffect(() => {
        const filtered = filterDataByRange(allLogs, timeRange, projectId);
        const aggregated = putAllDataTogheter(filtered, timeRange);

        const finalData = logType === "all"
            ? aggregated
            : aggregated.map(entry => ({
                date: entry.date,
                [logType]: entry[logType as keyof typeof entry] || 0,
            }));

        setFilteredData(finalData as preProcessDataType[]);
    }, [timeRange, logType, allLogs, projectId]);

    return (
        <main className="containerProjectLineChart"
            style={{
                backgroundColor: "white",
                height: "100%",
                borderRadius: ".5rem",
                padding: "2rem"
            }}>
            <h2 className="ProjectLineChartH2">Projektets Loggar</h2>
            <ResponsiveContainer
                width="100%"
                height={500}
                style={{
                    padding: "2rem"
                }}>
                <LineChart data={filteredData} >
                    <XAxis
                        tickMargin={10}
                        style={{
                            fontSize: "1.05rem",
                            fontWeight: 800,
                            letterSpacing: ".1rem"
                        }}
                        dataKey="date"
                        tickFormatter={(date) => {
                            if (timeRange === "month") {
                                return date.replace("-", "/");
                            }
                            return date;
                        }} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis allowDecimals={false} />
                    <Tooltip
                        cursor={{
                            stroke: "var(--Info-color-)",
                            strokeWidth: 3
                        }}
                        position={{ x: -62, y: 80 }}
                        itemStyle={{
                            padding: ".6rem",
                            fontSize: "1.2rem"
                        }}
                        labelStyle={{
                            fontSize: "1.2rem",
                            padding: ".6rem",
                            color: "#033649",
                            marginBottom: ".5rem"
                        }}
                        contentStyle={{
                            border: "none"
                        }}
                    />
                    <Legend
                        iconType="triangle"
                        verticalAlign="top"
                        iconSize={20}
                        wrapperStyle={{ padding: '1rem' }}
                    />
                    {(logType === "all" || logType === "info") && (
                        <Line
                            type="monotone"
                            dataKey="info"
                            stroke="var(--Info-color-)"
                            strokeWidth={1.6}
                            name="Info" />
                    )}
                    {(logType === "all" || logType === "warning") && (
                        <Line
                            type="monotone"
                            dataKey="warning"
                            stroke="var(--Warning-color-)"
                            strokeWidth={1.6}
                            name="Warning" />
                    )}
                    {(logType === "all" || logType === "error") && (
                        <Line
                            type="monotone"
                            dataKey="error"
                            stroke="var(--errors-color-)"
                            strokeWidth={1.6}
                            name="Error" />
                    )}
                    {(logType === "all" || logType === "crashed") && (
                        <Line
                            type="monotone"
                            dataKey="crashed"
                            stroke="var(--Crashed-color-)"
                            strokeWidth={1.6}
                            name="Crashed" />
                    )}
                </LineChart>

            </ResponsiveContainer>
            <section className="selectContainer">
                <select className="selectenForLineCart" value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                    <option value="today">Today</option>
                    <option value="week">A week back</option>
                    <option value="month">Last month</option>
                    <option value="year">The whole year</option>
                </select>
                <select className="selectenForLineCart" value={logType} onChange={(e) => setLogType(e.target.value)}>
                    <option value="all">All Logs</option>
                    <option value="info">Info</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                    <option value="crashed">Crashed</option>
                </select>
            </section>
        </main>
    );
}