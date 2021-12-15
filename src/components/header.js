import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import DarkmodeToggle from "./headerComponent/darkmodeToggle";
import Hamburger from "./headerComponent/hamburger";
import Category from "./headerComponent/category";
import { Link } from "gatsby";

const Logo = styled.h2`
    // display: inline-block;
    text-align: center;
    // font-family: "Noto Sans KR"
`;

const HeaderElement = styled.div`
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: #fff;
    top: ${props => props.isHeader? '0px' : '-80px'};
    opacity: 0.85;
    backdrop-filter: blur(10px);
    transition: .5s ease-out;

    ${props => props.isScrolled && css`
        box-shadow: 0 4px 4px rgba(31, 35, 46, .15);
        transition: box-shadow .5s ease-in;    
        transition: .5s ease-in;
    `}
`

const Header = ({categoryData}) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHeader, setIsHeader] = useState(true);
    const [thisLocation, setThisLocation] = useState(0);
    const [isCategory, setIsCategory] = useState(false);
    const headerListener = () => {
        const thisWinLocation = window.pageYOffset
        if(thisLocation < thisWinLocation) { // 내림
            setIsHeader(false)
        }else{ // 올림
            setIsHeader(true)
        }
        setThisLocation(thisWinLocation)
        setIsScrolled(window.pageYOffset > 0);
    };
    useEffect(() => {
      window.addEventListener("scroll", headerListener);
      return () => {
        window.removeEventListener("scroll", headerListener)
      }
    }, [isScrolled, thisLocation]);

    const setCategory = () => {
        setIsCategory(!isCategory)
    };

    return(
        <HeaderElement isScrolled={isScrolled} isHeader={isHeader}>
            <Hamburger changeCategoryState={setCategory} isCategory={isCategory}></Hamburger>
            <Logo><Link to="/">K-Blog</Link></Logo>
            <DarkmodeToggle/>
            <Category isCategory={isCategory} setCategory={setCategory} categoryData={categoryData}></Category>
        </HeaderElement>
    )
};
//  깃, 이메일, 다크모드
export default Header;