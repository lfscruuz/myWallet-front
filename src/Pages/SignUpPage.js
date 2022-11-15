import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/MyWallet.png";


export default function SignUpPage() {
    return (
        <Tela>
            <img src={logo} alt="logo" />
            <form>
                <input type="text" placeholder="nome" />
                <input type="email" placeholder="email" />
                <input type="password" placeholder="senha" />
                <input type="password" placeholder="confirme a senha" />
            </form>
            <button>
                Cadastrar
            </button>
            <Link to="/">
                <p>Já tem uma conta? Entre agora!</p>
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