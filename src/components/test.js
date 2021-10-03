import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useThemeState } from "../Contexts";
const TestComponent = styled.div`
  width : 1000px;
  height : 1009px;
  background:${(theme) => theme.theme == 'light'? 'white' : 'black'};
`;

const Test = () => {

  const theme = useThemeState().theme;
  // console.log("dd", theme)
   return (
    <TestComponent theme={theme}></TestComponent>
   )
};

export default Test;