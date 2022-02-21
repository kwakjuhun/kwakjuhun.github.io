import React, { useEffect, useState, useRef } from 'react';
import styled, {css} from 'styled-components';
import Highlighter from '../../../src/styles/highlighter';

const CodeElement = styled.div`
    line-height: 2em;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    @media screen and ${props => props.theme.size.mobile}{
        grid-template-rows: 300px 1fr;
        grid-template-columns: repeat(1, 1fr);
    }
`
 
const ShowElement = styled.div`
    position: sticky;
    top: 100px;
    width: 95%;
    height: 700px;
    display: grid;
    border-radius: 10px;
    grid-template-rows: repeat(2, 1fr);
    @media screen and ${props => props.theme.size.mobile}{
        order: 1;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
        height: 300px; 
        top: 56px;
        // width: 95vw;
        width: calc( 95vw - 10px );
    }
`

const Explanation = styled.div`
    width: 95%;
    @media screen and ${props => props.theme.size.mobile}{
        width: 90vw;
        order: 2;
    }
`
const Code = styled.div`
    background-color: rgb(40, 44, 52);
    color: white;
    // width: 100%;
    border: 1px solid black;
`
const Memory = styled.div`
    border: 1px solid black;
    background: white;
    // ${props => console.log(props)}
`
const HeaderFooter = styled.div`
    height: 270px;
`

const Content = styled.div`
    margin-top: 50px;
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
    overflow: hidden; 
    height: 30px;
    ${props => props.isVisible}
`

const Index = ({children}) => {
    const [isLocation, setLocation] = useState(0);
    const contentElements = useRef([])
    const expData = children[0].props.children
    const codeData = children[1].props.children
    const memoryData = children[2].props.children
    const info = expData[0].props.children;
    const contents = expData.slice(1,-1).map((line)=>line.props.children);
    const end = expData[expData.length - 1].props.children;
        useEffect(() => {
        const yLocs = contentElements.current.map((el)=>{
            if (window.innerWidth <= 768){
                const innerHeight = window.innerHeight / 2;
                return el.getBoundingClientRect().top + window.pageYOffset - innerHeight - (innerHeight / 2);
            }
            else{
                return el.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight / 2);
            }
        })
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
        if(i <= isLocation && j >= isLocation)
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
    }
    return(
        <CodeElement>
            <Explanation>
                <HeaderFooter>
                    {info}
                </HeaderFooter>
                <Content>
                    {contents.map((line, index) => {
                        
                        return <ContentLine ref={e => contentElements.current[index] = e} isBold={isLocation == index}>{line}</ContentLine>
                    })}
                </Content>
                <HeaderFooter>
                    {end}
                </HeaderFooter>
            </Explanation>

            <ShowElement>
                <Code>
                    &lt;Code&gt;<br/>
                    <Inner>
                        {codeData.map(data => {
                            const [a, b] = data.props.isVisible;
                            return <CodeLine isVisible={setVisibile(a, b)}>{data.props.children}</CodeLine>;
                        })}
                    </Inner>
                </Code>
                <Memory>
                    &lt;Memory&gt;<br/>
                    <Inner>
                        {memoryData.map(data => {
                            const [a, b] = data.props.isVisible;
                            return <CodeLine isVisible={setVisibile(a, b)}>{data.props.children}</CodeLine>;
                        })}
                    </Inner>
                </Memory>
            </ShowElement>
        </CodeElement>
    )
}

export default Index;