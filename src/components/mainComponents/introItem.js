import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display: block;
    margin: auto 0;
    margin-left: 40px;
    white-space:nowrap;
    @media screen and ${props => props.theme.size.tablet}{
        margin-left: 20px;
    }
    @media screen and ${props => props.theme.size.mobile}{
        margin-left: 25px;
    }
`   
const ItemTitle = styled.div`
    font-weight: bold;
    font-size: x-large;
`

const ItemContent = styled.div`
    margin-top: 10px;
    font-size: larger;
`
const ItemBody = styled.div`
    display: inline-block;
    margin-left: 20px;
`
const ItemImage = styled.img`
    display: inline-block;
    width: 50px;
    height: 50px;
`

const IntroItem = ({img, title, content}) => {
    return (
        <Item>
            <ItemImage src={img}></ItemImage>
            <ItemBody>
                <ItemTitle>{title}</ItemTitle>
                <ItemContent>{content}</ItemContent>
            </ItemBody>
        </Item>

    )
}

export default IntroItem;