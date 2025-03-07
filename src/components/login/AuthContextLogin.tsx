import { useState, ReactNode, useEffect } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { GetOneUsersFromDb } from "../../utils/fetchingFromApi/FetchUsers";
import { FetchOneUser } from "../../utils/ApiStore";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<any | null>(null);
    console.log(user);



    const login = async (userFirstName: string, userPassword: string) => {
        const fetchedUser = await GetOneUsersFromDb(userFirstName, userPassword);

        console.log("Fetched user:", fetchedUser);

        if (fetchedUser) {
            setUser(fetchedUser);
        } else {
            setUser(null);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};