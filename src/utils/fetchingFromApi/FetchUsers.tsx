import { FetchOneUser } from "../ApiStore";

export const GetOneUsersFromDb = async (userFirstName: string, userPassword: string) => {
    try {
        const user = await FetchOneUser(userFirstName, userPassword);
        return user;
    } catch (error) {
        console.error("Error fetching User:", error);
        return null;
    }
};
