import { PureComponent } from "react";
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


const processData = (test_data: any[]) => {
    const today = new Date();
    const sevenDaysAhead = new Date();
    sevenDaysAhead.setDate(today.getDate() + 7);

    const aggregatedData: any = {};

    test_data.forEach((item) => {
        const itemDate = new Date(item.date);
        if (itemDate >= today && itemDate <= sevenDaysAhead) {
            const dateKey = itemDate.toISOString().split("T")[0];

            if (!aggregatedData[dateKey]) {
                aggregatedData[dateKey] = { date: dateKey, error: 0, warning: 0, info: 0, crashed: 0 };
            }

            if (item.type in aggregatedData[dateKey]) {
                aggregatedData[dateKey][item.type] += 1;
            }
        }
    });

    return Object.values(aggregatedData);
};

class LineChartExample extends PureComponent {
    render() {
        const chartData = processData(test_data);

        return (
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="type" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="error" stroke="#ff0000" name="Errors" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="warning" stroke="#ffa500" name="Warnings" />
                    <Line type="monotone" dataKey="info" stroke="#0000ff" name="Info" />
                    <Line type="monotone" dataKey="crashed" stroke="#800080" name="Crashed" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

export default LineChartExample;
