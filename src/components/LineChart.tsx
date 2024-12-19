import { Line } from '@ant-design/plots';
import test_data from "../utils/testdata.json";


const prepareLineChartData = (_data: { id: string; project: string; date: string; type: string; message: string; }[]) => {

    const today = new Date();
    let oneWeekLater = new Date();
    oneWeekLater.setDate(today.getDate() + 7);

    const filteredData = test_data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= today && itemDate <= oneWeekLater;
    });

    const aggregatedData = filteredData.reduce((sum, curr) => {
        const dateKey = curr.date.split('T')[0];
        if (!sum[dateKey]) {
            sum[dateKey] = { date: dateKey, errors: 0, warnings: 0, crashed: 0 };
        }
        if (curr.type === "error") sum[dateKey].errors += 1;
        if (curr.type === "warning") sum[dateKey].warnings += 1;
        if (curr.type === "crached") sum[dateKey].crashed += 1;
        return sum;
    }, {} as Record<string, { date: string; errors: number; warnings: number; crashed: number }>);

    return Object.values(aggregatedData);
};

export const LineChart = () => {
    const lineChartData = prepareLineChartData(test_data);

    const props = {
        data: lineChartData,
        xField: 'date',
        yField: 'errors',
        seriesField: 'type',
        smooth: true,
        colorField: 'type',
        xAxis: {
            type: 'time',
            title: {
                text: "Date",
            },
        },
        yAxis: {
            title: {
                text: "Count",
            },
        },
        tooltip: {
            fields: ['date', 'errors', 'warnings', 'crashed'],
        },
    };

    return <Line {...props} />;
};