import styled from "styled-components"
import leaveIcon from "../assets/log-out-outline.svg"
import plusIcon from "../assets/add-circle-outline.svg"
import minusIcon from "../assets/remove-circle-outline.svg"
import { Link } from "react-router-dom"
export default function RegistryPage() {
    return (
        <Tela>
            <Topo>
                <h1>Olá Fulano!</h1>
                <Link to="/">
                    <img src={leaveIcon} alt="logout icon" />
                </Link>
            </Topo>
            <Registry>
                {/* <h1>Não há registros de entrada ou saída</h1> */}
                <Log>
                    <Instance>
                        <p className="date" >31/10</p>
                        <p className="description" >almoço mãe</p>
                        <p className="value" >R$20,00</p>
                    </Instance>
                    <Instance>
                        <p className="date" >31/10</p>
                        <p className="description" >almoço mãe</p>
                        <p className="value" >R$20,00</p>
                    </Instance>
                </Log>
                <Total>
                    <p>Saldo</p>
                    <p className="value" >R$20,00</p>
                </Total>
            </Registry>
            <Bottom>
                <Link to="/newEntry">
                    <button>
                        <img src={plusIcon} />
                        <p>Nova entrada</p>
                    </button>
                </Link>
                <Link to="/newExit" >
                    <button>
                        <img src={minusIcon} />
                        <p>Nova saída</p>
                    </button>
                </Link>
            </Bottom>
        </Tela>
    )
}

const Tela = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
const Topo = styled.div`
    height: 10%;
    margin: 2.5%, 0;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >h1{
        font-size: 30px;
        font-weight: 700;
        color: #fff;
    }
    >a >img{
        width: 35px;
    }

`
const Registry = styled.div`
    padding: 2.5% 0;
    width: 90%;
    height: 60%;
    border-radius: 1%;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* justify-content: center; */
    justify-content: space-between;
`

const Log = styled.div`
    width: 90%;
    height: 92.5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: scroll;
`

const Instance = styled.div`
        margin-bottom: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    >p{
        font-size: 15px;
    }
    >.date{
        color: #C6C6C6;
    }
    >.value{
        color: red;
    }
`

const Total = styled.div`
    height: 7.5%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >p{
        font-size: 20px;
    }
    >.value{
        color: red;
    }
`

const Bottom = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    height: 20%;
    >a{
        background-color: lightblue;
        width: 47.5%;
        text-decoration: none;
        border: none;
        border-radius: 2%;
    }
    >a >button{
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 2%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
    }
    >a >button >img{
        display: flex;
        width: 40px;
    }
    >a >button >p{
        color: #fff;
        font-size: 23px;
        max-width: 20%;
    }
`