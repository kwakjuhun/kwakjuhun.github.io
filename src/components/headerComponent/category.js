import React from 'react';
import styled, {css} from 'styled-components';

const CategoryElement = styled.div`
    position: fixed;
    left:0px;
    height:100%;
    background-color:white;
    transition: width .5s, height .5s;
    width: ${(props)=> props.isVisible? "450px":"0px"};
    transition: height .1s, width .1s;
    @media screen and ${props => props.theme.size.mobile}{
        // position: static;
        width: 100%;

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

const CategoryItem = styled.li`
    text-overflow: ellipsis;
`

const category = ({isCategory, categoryData}) => {
    return (
        <CategoryElement isVisible={isCategory}>
            <CategoryList isVisible={isCategory}>
                {categoryData.map((category)=>{
                    return(
                        <CategoryItem key={category.fieldValue}> {category.fieldValue+" ("+category.totalCount+")"} </CategoryItem>
                    )
                })}
            </CategoryList>
        </CategoryElement>
    )
}
export default category;