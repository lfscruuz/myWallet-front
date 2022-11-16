import { Link } from "react-router-dom"
import styled from "styled-components"

export default function NewExitPage() {
    return (
        <Tela>
            <Topo>
                <h1>Nova Saída</h1>
            </Topo>
            <form>
                <input type="text" placeholder="valor" />
                <input type="text" placeholder="descrição" />
            </form>
            <Link to="/registry">
                <button>
                    Salvar Saída
                </button>
            </Link>

        </Tela>
    )
}

const Tela = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
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
    >a{
        border-radius: 5px;
        border: none;
        width: 90%;
        height: 45px;
    }
    >a >button{
        border-radius: 5px;
        border: none;
        width: 100%;
        height: 45px;
        font-size: 20px;
        color: #fff;
    }
`
const Topo = styled.div`
    height: 10%;
    margin-top: 25px;
    margin-bottom: 40px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > h1{
        font-size: 30px;
        font-weight: 700;
        color: #fff;
    }
`