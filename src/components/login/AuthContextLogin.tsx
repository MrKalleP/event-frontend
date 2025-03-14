import { useState, ReactNode } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { FetchOneUser } from "../../utils/ApiStore";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<{ userFirstName: string } | null>(null);

    const login = async (userFirstName: string, userPassword: string) => {
        try {
            const fetchedUser = await FetchOneUser(userFirstName, userPassword);

            if (fetchedUser && fetchedUser.user.userFirstName) {
                setUser({ userFirstName: fetchedUser.user.userFirstName });
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("Login error:", error);
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