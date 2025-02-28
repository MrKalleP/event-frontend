import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const allLogs = [
    { date: "2025-02-21", value: 30 },
    { date: "2025-02-22", value: 50 },
    { date: "2025-02-23", value: 20 },
    { date: "2025-02-24", value: 40 },
    { date: "2025-02-25", value: 60 },
    { date: "2025-02-26", value: 80 },
    { date: "2025-02-27", value: 70 },
];

const filterDataByRange = (data, range) => {
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
            return data;
    }

    return data.filter((entry) => new Date(entry.date) >= startDate);
};

export default function ProjectLineChart() {
    const [timeRange, setTimeRange] = useState("week");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(filterDataByRange(allLogs, timeRange));
    }, [timeRange]);

    return (
        <main className="containerProjectLineChart" style={{ backgroundColor: "white", height: "100%", borderRadius: ".5rem", padding: "2rem" }}>
            <h2 className="ProjectLineChartH2">Projektets Loggar</h2>
            <select className="selectenForLineCart" value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                <option value="today">Idag</option>
                <option value="week">Senaste veckan</option>
                <option value="month">Senaste månaden</option>
                <option value="year">Hela året</option>
            </select>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={filteredData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>

        </main>
    );
}