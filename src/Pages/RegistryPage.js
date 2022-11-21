import styled from "styled-components";
import leaveIcon from "../assets/log-out-outline.svg";
import plusIcon from "../assets/add-circle-outline.svg";
import minusIcon from "../assets/remove-circle-outline.svg";
import { Link } from "react-router-dom";
import Instance from "../components/Instance";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import authContext from "../contexts/authContext";

export default function RegistryPage({ name }) {
    const {token} = useContext(authContext);
    const [registry, setRegistry] = useState([0, 1, 2]);
    const [hasItems, setHasItems] = useState(false);
    const [soma, setSoma] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:5000/registry", {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                setRegistry(res.data)
                if (res.data.length !== 0){
                    setHasItems(true)
                }
                calculaTotal(res.data)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }, [token])

    function SignOut(){
        axios.delete("http://localhost:5000/sign-out", {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    }

    function calculaTotal(r) {
        const arraySoma = []
        let novaSoma = 0;
        r.forEach(element => {
            let newValue = 0
            if (element.type === "minus"){
                newValue = -element.value
                arraySoma.push(newValue)
            } else{
                arraySoma.push(element.value)
            }
            
        });
        for (let i = 0; i < arraySoma.length; i++){
            novaSoma += arraySoma[i]
        }
        setSoma(novaSoma.toFixed(2))
    }

    return (
        <Tela>
            <Topo>
                <h1>Olá {name}!</h1>
                <Link to="/">
                    <img src={leaveIcon} onClick={SignOut} alt="logout icon" />
                </Link>
            </Topo>
            <Registry>
                <Log hasItems={hasItems}>
                    {hasItems === false ? <h1>Não há registros de entrada ou saída</h1> :

                        registry.map((m, i) => {
                            return (
                                <Instance registry={m} soma={soma} setSoma={setSoma} key={i}/>
                            )
                        })
                    }
                </Log>
                <Total soma={soma} >
                    {hasItems === false ? "" :
                        <>
                            <p>Saldo</p>
                            {soma < 0 ? 
                            <p className="value" >-R${Math.abs(soma)}</p>
                            :
                            <p className="value" >R${Math.abs(soma)}</p>
                        }
                        </>
                    }
                </Total>
            </Registry>
            <Bottom>
                <Link to="/newEntry">
                    <button>
                        <img src={plusIcon} alt="plus-icon" />
                        <p>Nova entrada</p>
                    </button>
                </Link>
                <Link to="/newExit" >
                    <button>
                        <img src={minusIcon} alt="minus-icon" />
                        <p>Nova saída</p>
                    </button>
                </Link>
            </Bottom>
        </Tela>
    );
};

const Tela = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
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
    };
    >a >img{
        width: 35px;
    };

`;
const Registry = styled.div`
    padding: 2.5% 0;
    width: 90%;
    height: 60%;
    border-radius: 1%;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: ${props => props.hasItems === true ? "flex-start" : "center"};
`;

const Log = styled.div`
    width: 90%;
    height: 92.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.hasItems === false ? "center" : "flex-start"};
    overflow-y: scroll;
`;

const Total = styled.div`
    height: 7.5%;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >p{
        font-size: 20px;
    };
    >.value{
        color: ${props => props.soma < 0 ? "red" : "green"};
    };
`;

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
    };
    >a >button{
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 2%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
    };
    >a >button >img{
        display: flex;
        width: 40px;
    };
    >a >button >p{
        color: #fff;
        font-size: 23px;
        max-width: 20%;
    };
`;