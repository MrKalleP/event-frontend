import { format } from "date-fns";

export const formatDate = (dateTimeString: string | number | Date) => {
    const date = new Date(dateTimeString);
    return format(date, "yyyy-MM-dd HH:mm");
};

export default formatDate