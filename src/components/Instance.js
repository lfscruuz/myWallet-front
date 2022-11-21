import styled from "styled-components"

export default function Instance({ registry }) {
    const { date, description, value, type } = registry
    return (
        <InstanceStyle type={type}>
            <p className="date" >{date}</p>
            <p className="description" >{description}</p>
            {type === "minus" ?
                <p className="value" >-R${value}</p>
                :
                <p className="value" >R${value}</p>
            }
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
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    >.date{
        color: #C6C6C6;
        display: flex;
        justify-content: flex-start;
    }
    >.value{
        display: flex;
        justify-content: flex-end;
        color: ${props => props.type === "minus" ? "red" : "green"};
    }
`