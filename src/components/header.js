import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
// import theme from "../styles/theme";
import DarkmodeToggle from "./headerComponent/darkmodeToggle";
import Hamburger from "./headerComponent/hamburger";

const Logo = styled.h2`
    position: absolute;
    left: 200px;
    top: 10px;
    text-align: center;
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

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHeader, setIsHeader] = useState(true);
    const [thisLocation, setThisLocation] = useState(0);
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
    

    return(
        <HeaderElement isScrolled={isScrolled} isHeader={isHeader}>
            <Hamburger></Hamburger>
            <Logo>K-Blog</Logo>
            <DarkmodeToggle/>
        </HeaderElement>
    )
};
//  깃, 이메일, 다크모드
export default Header;