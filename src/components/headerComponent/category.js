import React, { useState } from 'react';
import { Link } from 'gatsby'
import styled, {css} from 'styled-components';
import Hamburger from "./hamburger";

const CategoryElement = styled.div`
    position: fixed;
    left:0px;
    top:80px;
    background-color:rgba(255,255,255,1);
    z-index: 1;
    width: 300px;

    ${(props) => !props.isVisible && css`
        transform: translateX(-300px);
    `};

    @media screen and ${props => props.theme.size.mobile}{
        width: 100%;
        border-bottom: thick double black;
        ${(props) => !props.isVisible && css`
           transform: translateX(100%);
        `};
    }
`
const CategoryList = styled.ul`
    list-style: none;
    padding-left: 20px;
    padding-right: 20px;
`

const CategoryItem = styled.li`
    padding: 5px 0px 5px 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #efefef;
    font-size: 15px;
    // text-overflow: ellipsis;
`

const Category = () => {
    const [isCategory, setCategory] = useState(false);
    return (
        <>
            <Hamburger changeCategoryState={()=>{setCategory(!isCategory)}} isCategory={isCategory}/>
            <CategoryElement isVisible={isCategory}>
                <CategoryList>
                    <CategoryItem>JavaScript</CategoryItem>
                    <CategoryItem>React</CategoryItem>
                    <CategoryItem>Node.js</CategoryItem>
                </CategoryList>
            </CategoryElement>
        </>
    )
}

        // <CategoryElement isVisible={isCategory}>
        //     <CategoryList isVisible={isCategory}>
        //         {categoryData.map((category)=>{
        //             return(
        //                 <CategoryItem key={category.fieldValue}>
        //                     <Link
        //                         to={'/'+category.fieldValue}
        //                         onClick={(e)=>{
        //                             setCategory()
        //                         }}
        //                     > {category.fieldValue+" ("+category.totalCount+")"} </Link>
        //                 </CategoryItem>
        //             )
        //         })}
        //     </CategoryList>
        // </CategoryElement>

export default Category;