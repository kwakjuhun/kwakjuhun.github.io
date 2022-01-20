import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MottosWrapper = styled.div` 
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 40px;
    text-align: center;
    vertical-align: middle;
`
const Motto = styled.div`
    position: absolute;
    opacity: ${(props) => props.opacity};
    transition: opacity .5s;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    color: #113800;
    font-weight: 700;
`

const MottoElement = () => {
    const [thisItem, setThisItem] = useState(0);
    useEffect(()=>{
        function Loof(){
            let cnt = 0;
            const start = () => {
                cnt += 1
                setThisItem(cnt % 3);
            }
            return start;
        }
        setInterval(Loof(),5000);
    },[])

    return (
    <MottosWrapper>
        <Motto opacity={thisItem == 0 ? 1:0}> 일단 해보자 </Motto>
        <Motto opacity={thisItem == 1 ? 1:0}> Let's do it </Motto>
        <Motto opacity={thisItem == 2 ? 1:0}> 一応やってみよう </Motto>
    </MottosWrapper>
    )
}


export default MottoElement;