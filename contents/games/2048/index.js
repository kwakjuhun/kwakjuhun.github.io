import React, { useEffect, useState } from "react";
import styled from "styled-components";


const CodeElement = styled.div`
    width: 1200px;
    height: 100vh;
    margin: 0 auto;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
`

const Game = styled.div`
    // position: absolute;
    height: 600px;
    width: 600px;
    border: 1px solid black;
    left: 30px;
    // top: 50%;
    // left: 50%;
    // transform: translateX(-50%);
    // transform: translate(-50%,-50%);
`
const GameTable = styled.table`
    width: 100%;
    height: 100%;
	table-layout: fixed;
`
const GameTd = styled.td`
    border: 1px solid black;
    text-align: center;
    background: ${props => props.color};
    width: 30px;
    font-size: 2rem;
    color: white;
`
const GameOver = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left:0;
    top:0;
    background: rgba(0,0,0,0.5);
    z-index:10;
    color: white;
    font-size:5rem;
    text-align: center;
    padding: 300px 0;
    display:${props=> props.over ? "block":"none"};
`
const Score = styled.div`
    font-size: 1.5rem;

`
const colors = {
    0:"white",
    2:"red",
    4:"orange",
    8:"yellow",
    16:"green",
    32:"blue",
    64:"gray",
    128:"pink",
    256:"purple",
    512:"Coral",
    1024:"Cyan",
    2048:"Black",
}
const RecruitmentIndex = () => {
    const [table, setTable] = useState(new Array(16).fill(0));
    const [score, setScore] = useState(0);
    const [gameover, setGameover] = useState(false);
    // 숫자 추가
    
    const overTest = () => {
        for(let i = 0; i < 3; i++ ){
            for(let j = 0; j < 4; j++){
                if(table[i*4+j] == table[(i+1)*4+j] || table[j*4+i] == table[j*4+i+1]){
                    return false
                }
            }
        }
        return true
    }

    const makeTwo = () => {
        const zeroIndex = table.flatMap((s, i) => (s === 0 ? i: []))
        const ind = Math.floor(Math.random() * zeroIndex.length)
        table[zeroIndex[ind]] = 2
        setTable([...table])    
        if(zeroIndex.length == 1){
            setGameover(overTest())
        }
    }
    const keydownEvent = (e) => {
        e.preventDefault();
        let move = false;
        switch( e.keyCode ) {
            case 38: // up
                for(let i = 0; i < 4; i++){
                    for(let loop = 3; loop > 0; loop--){
                        for(let j = 0; j < loop; j++){
                            if((table[i+(j*4)] != 0 && table[i+(j*4)] == table[i+((j+1)*4)]) || (table[i+(j*4)] == 0 && table[i+((j+1)*4)] != 0)){
                                move = true
                                table[i+(j*4)] += table[i+((j+1)*4)]
                                table[i+((j+1)*4)] = 0
                            }
                        }
                    }
                }
                break;
            case 40: // down
                for(let i = 0; i < 4; i++){
                    for(let loop = 0; loop < 3; loop++){
                        for(let j = 3; j > loop; j--){
                            if((table[i+(j*4)] != 0 && table[i+(j*4)] == table[i+((j-1)*4)]) || (table[i+(j*4)] == 0 && table[i+((j-1)*4)] != 0)){
                                move = true
                                table[i+(j*4)] += table[i+((j-1)*4)]
                                table[i+((j-1)*4)] = 0
                            }
                        }  
                    }
                }
                break; 
            case 37: // left
                for(let i = 0; i < 4; i++){
                    for(let loop = 3; loop > 0; loop--){
                        for(let j = 0; j < loop; j++){
                            if((table[i*4+j] != 0 && table[i*4+j] == table[i*4+j+1]) || (table[i*4+j] == 0 && table[i*4+j+1] != 0)){
                                move = true
                                table[i*4+j] += table[i*4+j+1]
                                table[i*4+j+1] = 0
                            }
                        }  
                    }
                }
                break;
            case 39: // right 
                for(let i = 0; i < 4; i++){
                    for(let loop = 0; loop < 3; loop++){
                        for(let j = 2; j >= loop; j--){
                            if((table[i*4+j] != 0 && table[i*4+j] == table[i*4+j+1]) || (table[i*4+j+1] == 0 && table[i*4+j] != 0)){
                                move = true
                                table[i*4+j+1] += table[i*4+j]
                                table[i*4+j] = 0
                            }
                        }  
                    }
                }
                break;
        }
        if(move){
            setScore(score+1)
            makeTwo()
        }
    }

    const makeTable = () => {
        const result = [];
        for(let i = 0; i < 4; i += 1){
            result.push(
                <tr key={i}>
                    <GameTd color={colors[table[i*4]]}>
                        {table[i*4]}
                    </GameTd>
                    <GameTd color={colors[table[i*4+1]]}>
                        {table[i*4+1]}
                    </GameTd>
                    <GameTd color={colors[table[i*4+2]]}>
                        {table[i*4+2]}
                    </GameTd>
                    <GameTd color={colors[table[i*4+3]]}>
                        {table[i*4+3]}
                    </GameTd>
                </tr>
            )
        }
        return result;
    }
    useEffect(()=>{
        makeTwo()
        // const history = window ? window.localStorage.getItem('2048') : 

    },[])
    const gameReset = () => {
        table.fill(0);
        makeTwo();
        setTable([...table]);
        setScore(0);
        setGameover(false);
    }
    return(
        <CodeElement tabIndex={0} onKeyDown={keydownEvent}>
            <GameOver onClick={gameReset} over={gameover}>GameOver<br/> Score: {score}</GameOver>
            <Game>
                <GameTable over={gameover}>
                    <tbody>
                        {makeTable()}
                    </tbody>
                </GameTable>
                <Score>score: {score}</Score>                
            </Game>
            <div tabIndex={0}/>
        </CodeElement>
    )
}

export default RecruitmentIndex;