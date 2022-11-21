import axios from "axios";
import dayjs from "dayjs";
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import authContext from "../contexts/authContext";


export default function NewEntryPage(){
    const {token} = useContext(authContext);
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState("")
    const navigate = useNavigate();
    const newEntryForm = {
        description,
        value,
        type: "minus"
    }
    function valueHanlder(e){
        e.preventDefault();
        setValue(Number(e.target.value));
        newEntryForm.value = value;
    }
    function descriptionHandler(e){
        e.preventDefault();
        setDescription(e.target.value);
        newEntryForm.description = description;
    }
    
    function submitHandler(){
        axios.post("http://localhost:5000/registry", newEntryForm, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then(
            navigate("/registry")
        ).catch((err) => console.log(err.response))
    }
    return(
        <Tela>
            <Topo>
                <h1>Nova saída</h1>
            </Topo>
            <form>
                <input type="text" placeholder="valor" onChange={(e) => valueHanlder(e)} />
                <input type="text" placeholder="descrição" onChange={(e) => descriptionHandler(e)}/>
            </form>
                <button onClick={submitHandler} >
                    Salvar Saída
                </button>
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
    >button{
        border-radius: 5px;
        border: none;
        width: 90%;
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