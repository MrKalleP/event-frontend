import { DataType, preProcessDataType } from "../../utils/Interface";
import formatDate from "../../utils/DateFunction";

export const PreProcessData = (data: DataType[] = []): preProcessDataType[] => {

    // Skapa en tom struktur för att gruppera data.
    const groupedData: { [key: string]: preProcessDataType } = {};
    const today = new Date();
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7); // Sätt datum till en vecka tillbaka.

    data.forEach(({ date, type }) => {
        const dateObj = new Date(date);
        // Kontrollera om datumet ligger inom den senaste veckan.

        if (dateObj >= oneWeekAgo && dateObj <= today) {
            // Formatera datumet med din formatDate-funktion.

            const formattedDate = formatDate(dateObj).split(" ")[0]; // Ta bara "yyyy-MM-dd".
            // Om datumet inte redan finns i groupedData, skapa en ny post.

            if (!groupedData[formattedDate]) {
                groupedData[formattedDate] = {
                    date: formattedDate,
                    info: 0,
                    warning: 0,
                    error: 0,
                    crashed: 0,
                };
            }

            // Uppdatera rätt typ i groupedData om typen matchar.

            if (type in groupedData[formattedDate]) {
                groupedData[formattedDate][type as keyof preProcessDataType]++;
            }
        }
    });
    // Returnera värdena från groupedData, sorterade efter datum.

    return Object.values(groupedData).sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
};