import React from 'react';
import { Link } from 'gatsby'
import styled, {css} from 'styled-components';
const CategoryElement = styled.div`
    position: fixed;
    left:0px;
    background-color:white;
    transition: width .5s, height .5s;
    width: ${(props)=> props.isVisible? "450px":"0px"};
    height: ${(props)=> props.isVisible? "100vh":"0px"};
    transition: height .1s, width .1s;
    @media screen and ${props => props.theme.size.mobile}{
        width: 100%;
        height: 100%;
        border-bottom: thick double black;
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

const Category = ({isCategory, categoryData}) => {
    return (
        <CategoryElement isVisible={isCategory}>
            <CategoryList isVisible={isCategory}>
                {categoryData.map((category)=>{
                    return(
                        <CategoryItem key={category.fieldValue}><Link to={'/'+category.fieldValue}> {category.fieldValue+" ("+category.totalCount+")"} </Link></CategoryItem>
                    )
                })}
            </CategoryList>
        </CategoryElement>
    )
}
export default Category;