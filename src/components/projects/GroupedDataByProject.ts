import { projectDataProps } from "../../utils/Interface";

const now = new Date();
const oneDayAgoAgain = new Date(now.getTime() - 24 * 60 * 60 * 1000);

export const groupedDataByProject = (data: projectDataProps[]) => {
    const groupedData = Array.from({ length: 24 }, (_, hourIndex) => {
        const currentHour = new Date(oneDayAgoAgain.getTime() + hourIndex * 60 * 60 * 1000);

        const formattedHour = `${currentHour.getHours().toString().padStart(2, '0')}:00`;
        return {
            hour: formattedHour,
            errors: 0,
        };
    });

    data.forEach((log) => {
        const dateObj = new Date(log.date);
        const hour = dateObj.getHours();

        if (log.type === "error" && dateObj >= oneDayAgoAgain && dateObj <= now) {
            groupedData[hour].errors += 1;
        }
    });
    return groupedData;
};
