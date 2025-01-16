import { DataType, ProcessedDataType } from "../../utils/Interface"

export const PreProcessData = (data: DataType[] = []): ProcessedDataType[] => {
    const groupedData: { [key: string]: ProcessedDataType } = {};
    const today = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(today.getDate() - 7);

    data.forEach(({ date, type }) => {
        const dateObj = new Date(date);
        if (dateObj >= oneWeekAgo && dateObj <= today) {
            const formattedDate = dateObj.toISOString().split('T')[0];
            if (!groupedData[formattedDate]) {
                groupedData[formattedDate] = { date: formattedDate, info: 0, warning: 0, error: 0, crashed: 0 };
            }
            if (type in groupedData[formattedDate]) {
                groupedData[formattedDate][type as keyof ProcessedDataType]++;
            }
        }
    });

    return Object.values(groupedData).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};