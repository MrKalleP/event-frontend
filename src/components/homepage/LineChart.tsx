
import { Log } from "../../utils/Interface";
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


function LineChartExample({ allLogs }: { allLogs: Log[] }) {

    const processedData = PreProcessData(allLogs);

    // PreProcessData gör så att jag får rätt data för min chart det vill säga 24 timmar från nu bakåt i tiden 
    // jag hämtar alla loggar från backend med hjälp av FetchAllLogs och fetchdata från ApiStore 
    // jag får en array med alla loggar som ser ut som detta 0: {id:2, project:"ståldirek, date: "2025-01-28T07:00:00Z", type:"error", message:"hej det här är ett project"} och en för varje log.
    // när jag lägger in allLogs o PreProcessData får jag fram processedData som ser ut 0: crashed: 0 date: "2025-01-23 "error: 1 info: 0 warning: 1 det vill säga alla olika typer och antal typer som inte fins och finns det datumet max en vecka tillbaka


    return (

        <ResponsiveContainer
            width="100%"
            height="100%"
            style={{
                backgroundColor: "white",
                borderRadius: ".5rem",
                padding: "1rem"
            }}>
            <LineChart
                style={{ padding: "1rem" }}
                data={processedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="date"
                    tick={{
                        fill: "#2A2A2A",
                        fontSize: 13
                    }} />
                <YAxis
                    tick={{
                        fill: "#2A2A2A",
                        fontSize: 12
                    }}
                />
                <Tooltip
                    cursor={{
                        stroke: "var(--Info-color-)",
                        strokeWidth: 3
                    }}
                    position={{ x: 84, y: 72 }}
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
                        borderRadius: ".5rem",
                        padding: "1rem"
                    }}
                />
                <Legend
                    iconType="triangle"
                    verticalAlign="top"
                    iconSize={20}
                    wrapperStyle={{ padding: '1rem' }}
                />
                <Line
                    type="monotone"
                    dataKey="info"
                    stroke="var(--Info-color-)"
                    strokeWidth={1.6}
                    name="Info"
                    activeDot={{ r: 8 }} />
                <Line
                    type="monotone"
                    dataKey="warning"
                    stroke="var(--Warning-color-)"
                    strokeWidth={1.6}
                    name="Warning" />
                <Line
                    type="monotone"
                    dataKey="error"
                    stroke="var(--errors-color-)"
                    strokeWidth={1.6}
                    name="Error" />
                <Line
                    type="monotone"
                    dataKey="crashed"
                    stroke="var(--Crashed-color-)"
                    strokeWidth={1.6}
                    name="crashed" />
            </LineChart>
        </ResponsiveContainer>

    );
}

export default LineChartExample;