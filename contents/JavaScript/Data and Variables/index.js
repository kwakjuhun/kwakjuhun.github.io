import React, { useEffect, useState } from 'react';
import styled, {css} from 'styled-components';
import Highlighter from '../../../src/styles/highlighter';

const IndexElement = styled.div`
    position: sticky;
    top: 100px;
    width: 95%;
    height: 700px;
    display: grid;
    // border: 3px dotted black;
    border-radius: 10px;
    grid-template-rows: repeat(2, 1fr);
    // justify-content: center;
    // align-items: center;
`   
const Code = styled.div`
    background-color: rgb(40, 44, 52);
    color: white;
    width: 100%;
    // width: 90%;
    // height: 300px;
    // margin-top: 40px;
    border: 1px solid black;
`
const Memory = styled.div`
    // background: red;
    // width: 494px;
    // width:90%;
    // height: 294px;
    border: 1px solid black;
`
const Content = styled.div`
    width: 95%;
    margin: 350px 0;
`
const Test = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
`
const Inner = styled.div`
    margin : 10px;
    margin-left: 30px;
`

const Explanation = styled.div`
`
const MemoryTable = styled.table`
    display: inline-block;
    height: 60px;
    border:1px solid black;
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


const code = {

}

const memory = {

}
const contents = [

]
const Index = ({children}) => {
    const [isLocation, setLocation] = useState(0)
    const contents = children.map((line)=>line.props.children)

    // console.log(children.map((line)=>{return line.props.children}))
    // const [y, setY] = useState(0) 
    useEffect(() => {
        const check = () => {
            const loc = parseInt(window.pageYOffset / 100)-10;
            if(0 <= loc && loc <= 19)
                setLocation(loc)
        }
        check()
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
            <Content>
                {contents.map((line, index) => {
                    return <ContentLine isBold={isLocation == index}>{line}</ContentLine>
                })}
            </Content>

            <IndexElement>
                <Code>
                    <>&lt;Code&gt;<br/></>
                    <Inner>
                        <CodeLine isVisible={setVisibile(0,10)} >let x;</CodeLine>
                        <CodeLine isVisible={setVisibile(2,10)} >x = "aaa";</CodeLine>
                        <CodeLine isVisible={setVisibile(5,10)} >x = "bbb";</CodeLine>
                        <CodeLine isVisible={setVisibile(8,10)} >y = "bbb";</CodeLine>
                    </Inner>
                </Code>
                <Memory>
                    &lt;Memory&gt;<br/>
                    <Inner>
                        <CodeLine isVisible={setVisibile(1,3)} > @1001 : x =&gt; </CodeLine>
                        <CodeLine isVisible={setVisibile(4,6)} > @1001 : x =&gt; @5001  </CodeLine>
                        <CodeLine isVisible={setVisibile(7,10)} > @1001 : x =&gt; @5002  </CodeLine>
                        <CodeLine isVisible={setVisibile(9,10)} > @1002 : y =&gt; @5002  </CodeLine>
                        <CodeLine isVisible={setVisibile(3,10)} > @5001 : "aaa" </CodeLine>
                        <CodeLine isVisible={setVisibile(6,10)} > @5002 : "bbb" </CodeLine>
                    </Inner>
                </Memory>
            </IndexElement>
        </Test>
    )
}

export default Index;