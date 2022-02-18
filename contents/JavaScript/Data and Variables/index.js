import React, { useEffect, useState, useRef } from 'react';
import styled, {css} from 'styled-components';
import Highlighter from '../../../src/styles/highlighter';

const IndexElement = styled.div`
    position: sticky;
    top: 100px;
    width: 95%;
    height: 700px;
    display: grid;
    border-radius: 10px;
    grid-template-rows: repeat(2, 1fr);
`   
const Code = styled.div`
    background-color: rgb(40, 44, 52);
    color: white;
    width: 100%;
    border: 1px solid black;
`
const Memory = styled.div`
    border: 1px solid black;
`
const Explanation = styled.div`
    width: 95%;
    height: 270px;
`


const Content = styled.div`
    width: 95%;
    margin-top: 50px;
`
const Test = styled.div`
    line-height: 2em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
`
const Inner = styled.div`
    margin : 10px;
    margin-left: 30px;
`

const ContentLine = styled.div`
    font-weight: ${(props) => props.isBold ? "bold":""};
    margin-bottom: 100px;
`
const CodeLine = styled.div`
    margin-bottom: 2px;
    overflow: hidden; 
    height: 25px;
    // height: 100px;
    ${props => props.isVisible}
`

const Index = ({children}) => {
    const [isLocation, setLocation] = useState(0);
    const contentElements = useRef([])
    const info = children[0].props.children;
    const contents = children.slice(1,-1).map((line)=>line.props.children);
    const end = children[children.length - 1].props.children;
    // console.log(children.map((line)=>{return line.props.children}))
    // const [y, setY] = useState(0) 
    useEffect(() => {
        const yLocs = contentElements.current.map((el)=>{
            return el.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2);
        })
        const maxCnt = yLocs.length - 1;
        const check = () => {
            const thisYOffset = window.pageYOffset;
            let cnt = -1
            yLocs.forEach((y)=>{
                if(y <= thisYOffset){
                    cnt += 1;
                }else{
                    return false;
                }
            })
            setLocation(cnt)
        }

        window.addEventListener("scroll", check);
        return () => {
            window.removeEventListener("scroll", check);
        }
    }, [])

    const setVisibile = (i, j) => {
        if(i <= isLocation)
            if(j >= isLocation) // 보임
                return css`
                    transition: height .5s, transform .5s .5s, opacity .5s .5s;
                `
            else // 지워짐
                return css` 
                    transform: translateX(250px); 
                    height: 0px; 
                    opacity: 0;    
                    transition: height .5s .5s, transform .5s, opacity .5s;
                    `
        else
            return css`
                transform: translateX(250px); 
                height: 0px; 
                opacity: 0;                                
                transition: height .5s .5s, transform .5s, opacity .5s;
            `
    }
    return(
        <Test>
            <div>
                <Explanation>
                    {info}
                </Explanation>
                <Content>
                    {contents.map((line, index) => {
                        return <ContentLine ref={e => contentElements.current[index] = e} isBold={isLocation == index}>{line}</ContentLine>
                    })}
                </Content>
                <Explanation>
                    {end}
                </Explanation>
            </div>

            <IndexElement>
                <Code>
                    <>&lt;Code&gt;<br/></>
                    <Inner>
                        <CodeLine isVisible={setVisibile(0,999)} >let x;</CodeLine>
                        <CodeLine isVisible={setVisibile(2,999)} >x = "aaa";</CodeLine>
                        <CodeLine isVisible={setVisibile(5,999)} >x = "bbb";</CodeLine>
                        <CodeLine isVisible={setVisibile(7,999)} >y = "bbb";</CodeLine>
                    </Inner>
                </Code>
                <Memory>
                    &lt;Memory&gt;<br/>
                    <Inner>
                        <CodeLine isVisible={setVisibile(1,3)} > @1001 : x → </CodeLine>
                        <CodeLine isVisible={setVisibile(4,6)} > @1001 : x → @5001  </CodeLine>
                        <CodeLine isVisible={setVisibile(6,999)} > @1001 : x → @5002  </CodeLine>
                        <CodeLine isVisible={setVisibile(8,999)} > @1002 : y → @5002  </CodeLine>
                        <CodeLine isVisible={setVisibile(3,999)} > @5001 : "aaa" </CodeLine>
                        <CodeLine isVisible={setVisibile(6,999)} > @5002 : "bbb" </CodeLine>
                    </Inner>
                </Memory>
            </IndexElement>
        </Test>
    )
}

export default Index;