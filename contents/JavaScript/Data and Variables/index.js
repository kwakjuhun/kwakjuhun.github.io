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
        width: 95vw;
    }
`   
const Explanation = styled.div`
    width: 45%;
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
    margin-bottom: 2px;
    overflow: hidden; 
    height: 25px;
    ${props => props.isVisible}
`

const Index = ({children}) => {
    const [isLocation, setLocation] = useState(0);
    const contentElements = useRef([])
    const info = children[0].props.children;
    const contents = children.slice(1,-1).map((line)=>line.props.children);
    const end = children[children.length - 1].props.children;
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
            </ShowElement>
        </CodeElement>
    )
}

export default Index;