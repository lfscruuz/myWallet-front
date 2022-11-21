import GlobalStyle from "./constants/GlobalStyles"
import SignInPage from "./Pages/SignInPage"
import SignUpPage from "./Pages/SignUpPage";
import RegistryPage from "./Pages/RegistryPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewEntryPage from "./Pages/NewEntryPage";
import NewExitPage from "./Pages/NewExitpage";
import { useState } from "react";
import { AuthProvider } from "./contexts/authContext";

export default function App() {
    const [name, setName] = useState("");

    return (
        <AuthProvider>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<SignInPage name={name} setName={setName} />} />
                    <Route path="/cadastro" element={<SignUpPage name={name} setName={setName} />} />
                    <Route path="/registry" element={<RegistryPage name={name} />} />
                    <Route path="/newEntry" element={<NewEntryPage />} />
                    <Route path="/newExit" element={<NewExitPage />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}
