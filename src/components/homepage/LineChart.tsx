
import { useAllLogs } from "../../hooks/useFetchAllLogs";
import { PreProcessData } from "./preProcessData";


import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

function LineChartExample() {
    const { data: allLogs } = useAllLogs()
    const processedData = PreProcessData(allLogs);
    console.log(allLogs);
    console.log(processedData);


    // PreProcessData gör så att jag får rätt data för min chart det vill säga 24 timmar från nu bakåt i tiden 
    // jag hämtar alla loggar från backend med hjälp av FetchAllLogs och fetchdata från ApiStore 
    // jag får en array med alla loggar som ser ut som detta 0: {id:2, project:"ståldirek, date: "2025-01-28T07:00:00Z", type:"error", message:"hej det här är ett project"} och en för varje log.
    // när jag lägger in allLogs o PreProcessData får jag fram processedData som ser ut 0: crashed: 0 date: "2025-01-23 "error: 1 info: 0 warning: 1 det vill säga alla olika typer och antal typer som inte fins och finns det datumet max en vecka tillbaka


    return (

        <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: "white", borderRadius: ".5rem", padding: "1rem" }}>
            <LineChart
                data={processedData}
                margin={{
                    top: 6,
                    right: 35,
                    left: 15,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fill: "#2A2A2A", fontSize: 10 }} />
                <YAxis tick={{ fill: "#2A2A2A", fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="info" stroke="var(--Info-color-)" strokeWidth={1.6} name="Info" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="warning" stroke="var(--Warning-color-)" strokeWidth={1.6} name="Warning" />
                <Line type="monotone" dataKey="error" stroke="var(--errors-color-)" strokeWidth={1.6} name="Error" />
                <Line type="monotone" dataKey="crashed" stroke="var(--Crashed-color-)" strokeWidth={1.6} name="crashed" />
            </LineChart>
        </ResponsiveContainer>

    );
}

export default LineChartExample;