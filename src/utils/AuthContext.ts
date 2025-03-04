import { createContext } from "react";
import { AuthContextType } from "./Interface";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);