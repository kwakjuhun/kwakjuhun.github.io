import React from "react";
import styled from "styled-components";

const Layer = styled.div`
    margin-top: 80px;
    display: table;
    width:100%;
    height:100%;
//    background:${(props) => props.theme.colors.second};
    background:var(--second);
`;
const LayerInner = styled.div`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
`;
const ContentElement = styled.div`
    display: inline-block;
    width: 980px;
    // background:${(props) => props.theme.colors.second};
    background:var(--second);
    // border: 1px solid;
    @media screen and (max-width: 980px){
        width: 100%;
    }
`





const Content = ({children}) => {
    return (
        <Layer>
            <LayerInner>
                <ContentElement>
                    {children}
                </ContentElement>
            </LayerInner>
        </Layer>
    )
}


export default Content;