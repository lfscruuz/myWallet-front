import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/myWallet.png";
import { API_URI } from "../constants/LinksAPI";


export default function SignUpPage({name, setName}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const formSignUp = {
        name,
        email,
        password
    };

    function nameHandler(e) {
        e.preventDefault();
        setName(e.target.value);
        formSignUp.name = name;
    };
    function emailHandler(e) {
        e.preventDefault();
        setEmail(e.target.value);
        formSignUp.email = email;
    };
    function passwordHandler(e) {
        e.preventDefault();
        setPassword(e.target.value);
    };
    function confirmPasswordHandler(e) {
        e.preventDefault();
        setConfirmPassword(e.target.value);
    };
    function submitHandler() {
        if (password === confirmPassword) {
            formSignUp.password = confirmPassword;
            axios.post(`${API_URI}/sign-up`, formSignUp).then((res) => { 
                navigate("/")
            })
            .catch((err) => { 
                if (err.response.status === 409){
                    if (err.response.data === "usuário já existe"){
                        alert("usuário já existe")
                    }
                }
            })
        } else {
            alert("as senhas não correspondem");
        }
    };

    return (
        <Tela>
            <img src={logo} alt="logo" />
            <form>
                <input type="text" placeholder="nome" onChange={(e) => nameHandler(e)} />
                <input type="email" placeholder="email" onChange={(e) => emailHandler(e)} />
                <input type="password" placeholder="senha" onChange={(e) => passwordHandler(e)} />
                <input type="password" placeholder="confirme a senha" onChange={(e) => confirmPasswordHandler(e)} />
            </form>
            <button onClick={() => submitHandler()} >
                Cadastrar
            </button>
            <Link to="/">
                <p>Já tem uma conta? Entre agora!</p>
            </Link>

        </Tela>
    );
}

const Tela = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    >img{
        width: 70%;
    }
    >form{
        width: 90%;
    }
    >form >input{
        height: 60px;
        width: 100%;
        font-size: 20px;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 5px;
        border: none;
    }
    >button{
        border-radius: 5px;
        border: none;
        width: 90%;
        height: 45px;
        font-size: 20px;
        color: #fff;
    }
    >a{
        text-decoration: none;
        margin-top: 35px;
        color: #fff;
    }
`