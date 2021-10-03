import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
// import theme from "../styles/theme";
import DarkmodeToggle from "./headerComponent/darkmodeToggle";

const Logo = styled.h2`
    position: absolute;
    left: 200px;
    top: 10px;
    text-align: center;
`;

const Hamburger = styled.button`
    position: absolute;
    top: 0px;
    left: 0px;
    // display: block;
    width : 80px;
    height : 80px;
    border: 0px;
`;
const LineWrapper = styled.div`
    cursor:pointer;
    width:56px;  
    height:35px;
    position:relative;
    // top:22.5px;
    left:3px;
`;

const Line = {
    background:'black',
    marginTop:'6px',
    marginBottom:'6px',
    width:'56px',
    height:'7px',
    borderRadius:'2px',
    boxShadow:'0 1px 3px rgba(0,0,0,.5)',
    position:'relative',
};
const TopLine = styled.div`

`
const MidLine = styled.div`

`
const BottomLine = styled.div`

`

// const scrolled = css`
//     box-shadow: 0 4px 4px rgba(31, 35, 46, .15);
//     transition: box-shadow .5s ease-in;
// `;
const HeaderElement = styled.div`
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: #fff;
    top: ${props => props.isHeader? '0px' : '-80px'};
    z-index: 1;
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
            <Hamburger><LineWrapper>
                <TopLine style={Line}></TopLine>
                <MidLine style={Line}></MidLine>
                <BottomLine style={Line}></BottomLine>
            </LineWrapper></Hamburger>
            <Logo>K-Blog</Logo>
            <DarkmodeToggle/>
        </HeaderElement>
    )
};
//  깃, 이메일, 다크모드
export default Header;