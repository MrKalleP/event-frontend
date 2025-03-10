import { useState, ReactNode } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { GetOneUsersFromDb } from "../../utils/fetchingFromApi/FetchUsers";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<string | null>(null);

    const login = async (userFirstName: string, userPassword: string) => {
        const fetchedUser = await GetOneUsersFromDb(userFirstName, userPassword);

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