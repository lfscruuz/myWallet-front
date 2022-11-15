import GlobalStyle from "./constants/GlobalStyles"
import SignInPage from "./Pages/SignInPage"
import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<SignInPage />}/>
                <Route path="/cadastro" element={<SignUpPage/>}/>
            </Routes>
            
        </BrowserRouter>
    )
}
