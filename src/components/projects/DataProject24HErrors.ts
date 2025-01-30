import { projectDataProps } from "../../utils/Interface";

const now = new Date();
const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

export const DataProject24HErrors = (data: projectDataProps[]) => {
    const groupedData = Array(24).fill(0).map((_, i) => ({
        hour: `${i.toString().padStart(2, '0')}:00`,
        errors: 0
    }));

    return data.reduce((acc, log) => {
        const dateObj = new Date(log.date);
        if (log.type === "error" && dateObj >= oneDayAgo && dateObj <= now) {
            acc[dateObj.getHours()].errors += 1;
        }
        return acc;
    }, groupedData);
};