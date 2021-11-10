import React, { useState } from "react";
import styled from "styled-components";

const CategoryElement = styled.div`
    height:80%;
    width:20px;
    background: white;
    position:fixed;
    top:10%;
    left:0px;
    transition: .5s ease-out;

    &:hover{
        transition: .5s ease-in;
        width:300px;
    }
`;


const Category = ({chiledren}) => {
    return(
    <CategoryElement>
        {chiledren}
    </CategoryElement>
    )
};
export default Category;