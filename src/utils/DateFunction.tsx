import { format } from "date-fns";

export const formatDate = (dateTimeString: string | number | Date) => {
    if (!dateTimeString) {
        return 'Invalid Date';
    }
    try {
        const date = new Date(dateTimeString);
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date');
        }
        return format(date, "yyyy-MM-dd HH:mm");
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid Date';
    }
};

export default formatDate;