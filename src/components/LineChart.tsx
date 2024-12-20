
import test_data from "../utils/testdata.json";

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

interface DataType {
    id: string;
    project: string;
    date: string;
    type: string;
    message: string;
}

interface ProcessedDataType {
    date: string;
    info: number;
    warning: number;
    error: number;
    crashed: number;
}

const preProcessData = (data: DataType[]): ProcessedDataType[] => {
    const groupedData: { [key: string]: ProcessedDataType } = {}; // En tomt objekt som ska innehålla grupperad data
    const today = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(today.getDate() - 7);

    // Gå igenom varje objekt i data-arrayen och gruppera dem efter datum /
    data.forEach(({ date, type }) => {
        const dateObj = new Date(date); // Skapa ett Date-objekt från datumsträngen för nuvarande objekt
        if (dateObj >= oneWeekAgo && dateObj <= today) {
            // Om datumet är inom en vecka från idag
            const formattedDate = dateObj.toISOString().split('T')[0]; // formatera datumet till ISO-format (YYYY-MM-DD)
            if (!groupedData[formattedDate]) {
                // Om datumet inte redan finns i groupedData
                groupedData[formattedDate] = { date: formattedDate, info: 0, warning: 0, error: 0, crashed: 0 };
                // Lägg till datumet i groupedData och sätt alla typer till 0
            }
            if (type in groupedData[formattedDate]) {
                // Om typen finns i groupedData för det aktuella datumet
                groupedData[formattedDate][type as keyof ProcessedDataType]++;
                // Öka antalet för den aktuella typen med 1, ex om typen är 'info' öka info med 1 för det aktuella datumet
            }
        }
    });

    const result = Object.values(groupedData); // Skapa en array av värdena i groupedData

    return result;
};
function LineChartExample() {
    const processedData = preProcessData(test_data);

    return (
        <ResponsiveContainer width="100%" height={400} style={{ marginTop: "7rem" }}>
            <LineChart
                data={processedData}
                margin={{
                    top: 25,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="info" stroke="#0022FF" name="Info" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="warning" stroke="#FFFF00" name="Warning" />
                <Line type="monotone" dataKey="error" stroke="#F4577E" name="Error" />
                <Line type="monotone" dataKey="crashed" stroke="#FF0000" name="crashed" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineChartExample;