import { createContext, useState } from "react";
const authContext = createContext();


function AuthProvider({ children }) {
    const [token, setToken] = useState("");

    return (
        <authContext.Provider value={{ token, setToken }}>
            {children}
        </authContext.Provider>
    )
}

export default authContext;
export { AuthProvider };