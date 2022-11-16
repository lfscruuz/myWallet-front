import GlobalStyle from "./constants/GlobalStyles"
import SignInPage from "./Pages/SignInPage"
import SignUpPage from "./Pages/SignUpPage";
import RegistryPage from "./Pages/RegistryPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewEntryPage from "./Pages/NewEntryPage";
import NewExitPage from "./Pages/NewExitpage";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/registry" element={<RegistryPage />} />
                <Route path="/newEntry" element={<NewEntryPage />} />
                <Route path="/newExit" element={<NewExitPage />} />
            </Routes>
        </BrowserRouter>
    )
}
