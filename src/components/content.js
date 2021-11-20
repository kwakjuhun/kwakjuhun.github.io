import React from "react";
import styled from "styled-components";

const Layer = styled.div`
    margin-top: 80px;
    display: table;
    width:100%;
    height:100%;
    background:${(props) => props.theme.colors.bgColor};
`;
const LayerInner = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
`;
const ContentElement = styled.div`
    display: inline-block;
    width: 980px;
    background:${(props) => props.theme.colors.color};
    border-color: ${(props) => props.theme.colors.titleColor}
    border: 1px solid;
    @media screen and (max-width: 980px){
        width: 100%;
    }
`
const PageElement = styled.li`
    height: 100px;
    color:${(props) => props.theme.colors.titleColor}    
`

// const Post = React.lazy(() => import("../components"))

const Content = ({contents}) => {
    const allPages = contents
    return (
        <Layer>
            <LayerInner>
                <ContentElement>
                    <ul>
                    {allPages.map((page)=>{
                        return(
                            <PageElement key={page.node.frontmatter.title}>{page.node.frontmatter.title}</PageElement>
                        )
                    })}
                    </ul>
                </ContentElement>
            </LayerInner>
        </Layer>
    )
}


export default Content;