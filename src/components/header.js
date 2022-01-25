import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

import DarkmodeToggle from "./headerComponent/darkmodeToggle";
import Category from "./headerComponent/category";

const HeaderElement = styled.div`
    position: fixed;
    width: 100%;
    height: 80px;
    top: 0px;
    background-color: rgba(255,255,255, ${(props) => props.isTop?0:1});
    backdrop-filter: blur(10px);
    transition: .5s ease-out;
    z-index: 10;

    ${props => props.isScrolled && css`
        box-shadow: 0 4px 4px rgba(31, 35, 46, .15);
        transition: box-shadow .5s ease-in;    
        transition: .5s ease-in;
        transform: translateY(-80px);
    `}
`

const Logo = styled.h2`
    text-align: center;
`;

const Header = ({ categoryData }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isTop, setIsTop] = useState(true);

    const scrollEvent = () => {
        let lastLocation = window.pageYOffset;
        return () => {
            const thisLocation = window.pageYOffset;
            if(lastLocation < thisLocation) { // 내림
                setIsScrolled(true)
            }else{ // 올림
                setIsScrolled(false)
            }
            if(thisLocation === 0){
                setIsScrolled(false)
                setIsTop(true)
            }else{
                setIsTop(false)
            }
            lastLocation = thisLocation
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent());
            return () => {
            window.removeEventListener("scroll", scrollEvent())
        }
    }, [])

    return(
        <HeaderElement isScrolled={isScrolled} isTop={isTop}>
            {/* <Hamburger changeCategoryState={setCategory} isCategory={isCategory}></Hamburger> */}
            <Logo><Link to="/">K-Blog</Link></Logo>
            <DarkmodeToggle/>
            {/* <Category isCategory={isCategory} setCategory={setCategory} categoryData={categoryData}></Category> */}
            <Category></Category>
        </HeaderElement>
    )
}

export default Header;