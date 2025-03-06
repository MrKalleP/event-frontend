import { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "../../utils/AuthContext";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<string | null>(null);


    useEffect(() => {
        if (user) {
            localStorage.setItem("user", user);
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const login = (username: string) => {
        setUser(username);
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