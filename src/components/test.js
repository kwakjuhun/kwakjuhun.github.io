import React, { useState } from "react";
import styled, { ThemeConsumer } from "styled-components";
import { useThemeState } from "../providers/themeContext";

const TestComponent = styled.div`
  width : 1000px;
  height : 1009px;
  // background: black;
  background:${(props) => props.theme.colors.bgColor};
`;

const Test = () => {
  const theme = useThemeState();
  // console.log("dd", props)
  return (
  // <TestComponent theme={theme}></TestComponent>
  <>
    <TestComponent></TestComponent>
    <TestComponent></TestComponent>
  </>
  )
};

export default Test;