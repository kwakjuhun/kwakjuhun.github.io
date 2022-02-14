import React from "react";
import styled from "styled-components";

const InfoElement = styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    background-color: #9AC95F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 500px;
`
const Title = styled.div`
    color: #113800;
    font-size: 3em;
    font-weight: 900;
    margin-left: 5vw;
    @media screen and ${props => props.theme.size.mobile}{
        font-size: 2em;   
        font-weight: 600;
    }
`
const Date = styled.div`
    margin-left: 5vw;
    color: rgba(255,255,255,0.5);
`
const Tags = styled.div`

`

const Info = ({ title, date }) => {
    if(date === undefined)
        return (
            <InfoElement>
                <Title>{title}</Title>
            </InfoElement>
        )
    else
        return(
            <InfoElement>
                <Title>{title}</Title>
                <Date>{date}</Date>
                <Tags></Tags>
            </InfoElement>
        )
    
}

export default Info;