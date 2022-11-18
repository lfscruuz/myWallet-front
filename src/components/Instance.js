import styled from "styled-components"

export default function Instance({registry, soma}) {
    const {date, description, value, type} = registry
    let newValue
    if (type === "minus"){
        newValue = - value
    } else{
        newValue = value
    }
    return (
        <InstanceStyle type={type}>
            <p className="date" >{date}</p>
            <p className="description" >{description}</p>
            <p className="value" >R${newValue}</p>
        </InstanceStyle>
    )
}

const InstanceStyle = styled.div`
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
        color: ${props => props.type === "minus" ? "red" : "green"};
    }
`