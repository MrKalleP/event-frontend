import { useState, useEffect, ReactNode } from "react";
import { AuthContext } from "../../utils/AuthContext";
import { FetchOneUser } from "../../utils/ApiStore";

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<{ userFirstName: string, userId: string, projectId: string } | null>(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const login = async (userFirstName: string, userPassword: string) => {
        try {
            const fetchedUser = await FetchOneUser(userFirstName, userPassword);

            if (fetchedUser && fetchedUser.user.userFirstName) {
                const newUser = {
                    userFirstName: fetchedUser.user.userFirstName,
                    userId: fetchedUser.user.userId,
                    projectId: fetchedUser.user.projectId
                };
                setUser(newUser);
                localStorage.setItem("user", JSON.stringify(newUser));
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
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};