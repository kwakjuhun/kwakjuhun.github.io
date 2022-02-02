import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    display: block;
    margin: auto 0;
    margin-left: 15px;
    white-space:nowrap;
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