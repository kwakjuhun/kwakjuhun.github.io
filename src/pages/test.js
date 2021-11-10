import React from "react";
import { graphql } from "gatsby";
import styled, { ThemeConsumer } from "styled-components";
import { useThemeState } from "../providers/themeContext";


const TestComponent = styled.div`
  width : 1000px;
  height : 1000px;
  // background:${(props) => props.theme.colors.bgColor};
`;

const Test = () => {
  return (
  <>
    <TestComponent></TestComponent>
  </>
  )
};

export default Test;