import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/myWallet.png";
import { API_URI } from "../constants/LinksAPI";
import authContext from "../contexts/authContext";


export default function SignInPage({setName}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setToken} = useContext(authContext);
    const navigate = useNavigate();
    const formSignIn = {
        email,
        password
    };

    function emailHandler(e) {
        e.preventDefault();
        setEmail(e.target.value);
        formSignIn.email = email;
    };
    function passwordHandler(e) {
        e.preventDefault();
        setPassword(e.target.value);
        formSignIn.password = password;
    };

    function submitHandler(){
        axios.post(`${API_URI}/sign-in`, formSignIn)
        .then((res) =>{
            setToken(res.data.token)
            setName(res.data.name)
            navigate("/registry")
        })
        .catch((err) =>{
            if (err.response.status === 401){
                if (err.response.data === "usuário não encontrado"){
                    alert("usuário não encontrado")
                } else {
                    alert("senha incorreta")
                }
            }
        })
    }
    
    return (
        <Tela>
            <img src={logo} alt="logo" />
            <form>
                <input type="email" placeholder="email" onChange={(e) => emailHandler(e)} />
                <input type="password" placeholder="senha" onChange={(e) => passwordHandler(e)} />
            </form>
            <button onClick={() => submitHandler()} >
                Entrar
            </button>
            <Link to="/cadastro">
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Tela>
    )
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