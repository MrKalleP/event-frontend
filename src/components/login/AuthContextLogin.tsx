import { useState, ReactNode } from "react";
import { AuthContext } from "../../utils/AuthContext";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<string | null>(localStorage.getItem("user"));

    const login = (username: string) => {
        setUser(username);
        localStorage.setItem("user", username);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
