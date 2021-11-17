import React from 'react';
import styled, {css} from 'styled-components';

const CategoryElement = styled.div`
    position: fixed;
    left:0px;
    // width: 200px;
    width: ${(props)=> props.isVisible? "450px":"0px"};
    background-color:white;
    transition: width .5s, height .5s;
    // transition-delay: visibility .5s;

    @media screen and ${props => props.theme.size.mobile}{
        // position: static;
        width: 100%
        ${(props) =>
            !props.isVisible && 
            css`
                height: 0%;
                // width: 0%
            `}
    }
`
const CategoryList = styled.ul`
    visibility: ${(props)=> props.isVisible? "visible":"hidden"};
    // transition: ease-in 1s;
    // transition-delay: visible .5s;
`

const category = ({isCategory, categoryData}) => {
    return (
        <CategoryElement isVisible={isCategory}>
            <CategoryList isVisible={isCategory}>
                {categoryData.map((category)=>{
                    return(
                        <li key={category.fieldValue}> {category.fieldValue+" ("+category.totalCount+")"} </li>
                    )
                })}
            </CategoryList>
        </CategoryElement>
    )
}
export default category;