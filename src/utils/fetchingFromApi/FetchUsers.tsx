import { FetchOneUser } from "../ApiStore";

export const GetOneUsersFromDb = async (userFirstName: string, userPassword: string) => {
    if (!userFirstName || !userPassword) return null;

    try {
        const user = await FetchOneUser(userFirstName, userPassword);
        console.log(user, "x");

        if (!user) {
            console.log("No user found");
            return null;
        }
        return user;
    } catch (error) {
        console.error("Error fetching User:", error);
        return null;
    }
};
